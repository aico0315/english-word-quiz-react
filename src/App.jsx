import { useState } from "react";
import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import CategorySelect from "./components/CategorySelect";
// import { wordRecords } from "./components/wordRecords";
// import QuestionScreen from "./components/QuestionScreen";
// import AnswerScreen from "./components/AnswerScreen";
// import AllAnsweredView from "./components/AllAnsweredView";
import WordManager from "./components/WordManager";

export default function App(){
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <Header onToggleTheme={ handleToggleTheme } className={isDark ? "dark-theme" : "light-theme"}/>
      <main>
        {/* <Dashboard /> */}
        {/* <CategorySelect /> */}
        {/* <QuestionScreen /> */}
        {/* <AnswerScreen wordArray={ wordRecords } /> */}
        {/* <AllAnsweredView /> */}
        <WordManager className={isDark ? "dark-theme" : "light-theme"}/>
      </main>
    </div>
  )
}