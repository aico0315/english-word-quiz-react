import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import CategorySelect from "./components/CategorySelect";
import { wordRecords } from "./components/wordRecords";
// import QuestionScreen from "./components/QuestionScreen";
import AnswerScreen from "./components/AnswerScreen";

export default function App(){
  return (
    <div>
      <Header />
      <main>
        {/* <Dashboard /> */}
        {/* <CategorySelect /> */}
        {/* <QuestionScreen /> */}
        <AnswerScreen wordArray={ wordRecords } />
      </main>
    </div>
  )
}