import { useState } from "react";
import Header from "./components/Header";
import "/src/App.css";
import Dashboard from "./components/Dashboard";
import CategorySelect from "./components/CategorySelect";
import { wordRecords } from "./components/wordRecords";
import QuestionScreen from "./components/QuestionScreen";
import AnswerScreen from "./components/AnswerScreen";
import AllAnsweredView from "./components/AllAnsweredView";
import WordManager from "./components/WordManager";
import correctnessCheck from "./utils/correctnessCheck";
// import getSortedCategories from "./utils/getSortedCategories";
import getWordsByCategory from "./utils/GetWordsByCategory";
import shuffleQuestions from "./utils/shuffleQuestions";

export default function App(){
  const [ isDark, setIsDark ] = useState(false);
  const handleToggleTheme = () => setIsDark(!isDark);

  const [ categoryWords, setCategoryWords ] = useState(null);

  const [ selectedCategory, setSelectedCategory ] = useState(null); //初期値は「未設定」
  const handleClick = (label) => {
    setSelectedCategory(label);
    const result = shuffleQuestions(getWordsByCategory([...wordRecords], label));
    console.log(result);
    setCategoryWords(result);
    setUserInput("");
    setCurrentIndex(0);
  }

  const [ isModalOpen, setIsModalOpen ] = useState(false); //最初は消えている
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const [ currentScreen, setCurrentScreen ] = useState("dashboard");
  const handleWordManagerDisplay = () => setCurrentScreen("wordManager");
  const handleQuestionScreenDisplay = () => {
    setCurrentScreen("questionScreen");
    handleModalClose();
  }

  const handleQuestionScreenReturn = () => {
    if(currentIndex + 1 >= categoryWords.length){
      setCurrentScreen("allAnsweredView");
    } else {
    setCurrentScreen("questionScreen");
    setCurrentIndex(currentIndex + 1);
    setUserInput("");
    }
  }

  const handleAnswerScreenDisplay = () => {
    setCurrentScreen("answerScreen");
    console.log(userInput, categoryWords[currentIndex].answer, currentIndex);
    setIsCorrect(correctnessCheck(userInput, categoryWords[currentIndex].answer));
  }

  const handleClickReturnBtn = () => setCurrentScreen("dashboard");

  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ userInput, setUserInput ] = useState("");
  const [ isCorrect, setIsCorrect ] = useState(null);

  const [ newWord, setNewWord ] = useState({
    id: "",
    category: "",
    question: "",
    answer: "",
    supplement:"",
  })

  const handleNewWordReset = () => setNewWord({
    id: "",
    category: "",
    question: "",
    answer: "",
    supplement:"",
  })

  const [ wordArray, setWordArray ] = useState(wordRecords);

  const handleClickRegistration = () => {
    if(selectedWordId){
      const update = wordArray.map(word => word.id === selectedWordId ? newWord : word);
      setWordArray(update);
    }else{
      const newId = String(Date.now());
      setWordArray(prev => {
        const newArray = [...prev, {...newWord, answer : [newWord.answer], id: newId}]
        console.log(newArray)
        return newArray;
      });
    }
    handleNewWordReset();
  }


  const [ selectedWordId, setSelectedWordId ] = useState("");
  const handleClickSetId = (wordId) => {
    setSelectedWordId(wordId);
    console.log(wordId);
    const getSelectedWord = wordArray.find(word => word.id === wordId);
    console.log(getSelectedWord);
    setNewWord(getSelectedWord);
  }

  const handleClickDelete = (wordId) => {
    const targetWord = wordArray.find(word => word.id === wordId);
    console.log(wordId);
    console.log(targetWord);
    if(window.confirm(`本当に${targetWord.question}を削除しますか？`)){
      const deletedWordArray = wordArray.filter(word => word.id !== wordId);
      setWordArray(deletedWordArray);
    }
  }

  return (
    <div className={`wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <Header onToggleTheme={ handleToggleTheme } className={isDark ? "dark-theme" : "light-theme"} onReturn={handleClickReturnBtn}/>
      <main>
        {currentScreen === "dashboard" && <Dashboard className={isDark ? "dark-theme" : "light-theme"} onOpen={ handleModalOpen } onDisplay={ handleWordManagerDisplay } />}
        {isModalOpen && <CategorySelect className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordRecords } onUpdate={ handleClick } onClose={ handleModalClose } onScreenLifecycle={ handleQuestionScreenDisplay }/>}
        {categoryWords && currentScreen === "questionScreen" && <QuestionScreen className={isDark ? "dark-theme" : "light-theme"} onReturn={ handleClickReturnBtn } onDisplay={ handleAnswerScreenDisplay } onCurrentWordArray={ categoryWords } onCurrentIndex={ currentIndex } value={userInput} setUserInput={ setUserInput } counterDis={ handleClick }/>}
        {currentScreen === "answerScreen" && <AnswerScreen className={isDark ? "dark-theme" : "light-theme"} wordArray={ categoryWords } onReturn={ handleClickReturnBtn } onCurrentIndex={ currentIndex } onCurrentWord={ categoryWords } onDisplay={  handleQuestionScreenReturn } userInput={ userInput } setIsCorrect={ setIsCorrect } isCorrect={ isCorrect }/>}
        {currentScreen === "allAnsweredView" && <AllAnsweredView className={isDark ? "dark-theme" : "light-theme"} onReturn={ handleClickReturnBtn }/>}
        {currentScreen === "wordManager" && <WordManager className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordArray } onReturn= { handleClickReturnBtn } newWord={ newWord } setNewWord={ setNewWord } wordReset={ handleNewWordReset } handleClickRegistration={ handleClickRegistration } handleClickSetId={ handleClickSetId } selectedWordId={ selectedWordId } handleClickDelete={ handleClickDelete }/>}
      </main>
    </div>
  )
}