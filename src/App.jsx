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

export default function App(){
  const [ isDark, setIsDark ] = useState(false);
  const handleToggleTheme = () => setIsDark(!isDark);

  const [ selectedCategory, setSelectedCategory ] = useState(null); //初期値は「未設定」
  const handleClick = (label) => {
    setSelectedCategory(label);
    console.log(label);
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
  const handleAnswerScreeDisplay = () => {
    setCurrentScreen("answerScreen");
  }

  const handleClickReturnBtn = () => setCurrentScreen("dashboard");


  return (
    <div className={`wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <Header onToggleTheme={ handleToggleTheme } className={isDark ? "dark-theme" : "light-theme"} onReturn={handleClickReturnBtn}/>
      <main>
        {currentScreen === "dashboard" && <Dashboard className={isDark ? "dark-theme" : "light-theme"} onOpen={handleModalOpen} onDisplay={handleWordManagerDisplay} />}
        {isModalOpen && <CategorySelect className={isDark ? "dark-theme" : "light-theme"} onUpdate={handleClick} onClose={handleModalClose} onScreenLifecycle={handleQuestionScreenDisplay}/>}
        {currentScreen === "questionScreen" && <QuestionScreen className={isDark ? "dark-theme" : "light-theme"} onReturn={handleClickReturnBtn} onDisplay={handleAnswerScreeDisplay}/>}
        {currentScreen === "answerScreen" && <AnswerScreen className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordRecords } onReturn={handleClickReturnBtn}/>}
        {currentScreen === "allAnsweredView" && <AllAnsweredView className={isDark ? "dark-theme" : "light-theme"}/>}
        {currentScreen === "wordManager" && <WordManager className={isDark ? "dark-theme" : "light-theme"} onReturn={handleClickReturnBtn}/>}
      </main>
    </div>
  )
}