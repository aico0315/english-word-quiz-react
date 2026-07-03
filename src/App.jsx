import { useState } from "react";
import Header from "./components/Header";
import "/src/App.css";
import Dashboard from "./components/Dashboard";
import CategorySelect from "./components/CategorySelect";
// import { wordRecords } from "./components/wordRecords";
// import QuestionScreen from "./components/QuestionScreen";
// import AnswerScreen from "./components/AnswerScreen";
// import AllAnsweredView from "./components/AllAnsweredView";
// import WordManager from "./components/WordManager";

export default function App(){
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = () => setIsDark(!isDark);

  const [selectedCategory, setSelectedCategory] = useState(null); //初期値は「未設定」
  const handleClick = (label) => {
    setSelectedCategory(label);
    console.log(label);
  }

  const [isModalOpen, setIsModalOpen] = useState(false); //最初は消えている
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className={`wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <Header onToggleTheme={ handleToggleTheme } className={isDark ? "dark-theme" : "light-theme"}/>
      <main>
        <Dashboard className={isDark ? "dark-theme" : "light-theme"} onOpen={handleModalOpen}/>
        {isModalOpen && <CategorySelect className={isDark ? "dark-theme" : "light-theme"} onClose={handleModalClose}/>}
        
        {/* <QuestionScreen className={isDark ? "dark-theme" : "light-theme"}/> */}
        {/* <AnswerScreen className={isDark ? "dark-theme" : "light-theme"} wordArray={ wordRecords } /> */}
        {/* <AllAnsweredView className={isDark ? "dark-theme" : "light-theme"}/> */}
        {/* <WordManager className={isDark ? "dark-theme" : "light-theme"}/> */}
      </main>
    </div>
  )
}