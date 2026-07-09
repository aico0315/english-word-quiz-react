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
    const result = shuffleQuestions(getWordsByCategory(wordRecords, label));
    console.log(result);
    setCategoryWords(result);
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
    setCurrentScreen("questionScreen");
    setCurrentIndex(currentIndex + 1);
    setUserInput("");
  }

  const handleAnswerScreenDisplay = () => {
    setCurrentScreen("answerScreen");
    setIsCorrect(correctnessCheck(userInput, wordRecords[currentIndex].answer));
  }

  const handleClickReturnBtn = () => setCurrentScreen("dashboard");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);


  return (
    <div className={`wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <Header onToggleTheme={ handleToggleTheme } className={isDark ? "dark-theme" : "light-theme"} onReturn={handleClickReturnBtn}/>
      <main>
        {currentScreen === "dashboard" && <Dashboard className={isDark ? "dark-theme" : "light-theme"} onOpen={ handleModalOpen } onDisplay={ handleWordManagerDisplay } />}
        {isModalOpen && <CategorySelect className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordRecords } onUpdate={ handleClick } onClose={ handleModalClose } onScreenLifecycle={ handleQuestionScreenDisplay }/>}
        {categoryWords && currentScreen === "questionScreen" && <QuestionScreen className={isDark ? "dark-theme" : "light-theme"} onReturn={ handleClickReturnBtn } onDisplay={ handleAnswerScreenDisplay } onCurrentWord={ categoryWords[currentIndex] } onCurrentIndex={ currentIndex } value={userInput} setUserInput={ setUserInput }/>}
        {currentScreen === "answerScreen" && <AnswerScreen className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordRecords } onReturn={ handleClickReturnBtn } onCurrentIndex={ currentIndex } onCurrentWord={ wordRecords[currentIndex] } onDisplay={  handleQuestionScreenReturn } userInput={ userInput } setIsCorrect={ setIsCorrect } isCorrect={ isCorrect }/>}
        {currentScreen === "allAnsweredView" && <AllAnsweredView className={isDark ? "dark-theme" : "light-theme"}/>}
        {currentScreen === "wordManager" && <WordManager className={isDark ? "dark-theme" : "light-theme"} onReturn= { handleClickReturnBtn }/>}
      </main>
    </div>
  )
}