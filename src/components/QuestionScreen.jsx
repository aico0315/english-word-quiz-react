import "/src/components/QuestionScreen.css";
import Button from "./Button";
import "./CounterDisplay";
import CounterDisplay from "./CounterDisplay";
import worryBoyBlue from "/src/assets/worryBoyBlue.svg"
import worryGirlWaterBlue from "/src/assets/worryGirlWaterBlue.svg"
import "/src/components/wordRecords.js";
import { wordRecords } from "./wordRecords";
import SetQuestion from "./SetQuestion";

export default function QuestionScreen(){
  const DummyCurrentIndex = 1;
  const DummyWords = wordRecords.length;
  const Questions = wordRecords;

  return (
    <div id="question-view" className="question-area hidden">
      <div className="counter-and-img-area">
        <img className="questionArea-img-left" src={ worryBoyBlue } alt="悩んでいる少年" />
        <CounterDisplay currentNum={DummyCurrentIndex} totalLength={DummyWords}/>
        <img className="questionArea-img-right" src={ worryGirlWaterBlue } alt="悩んでいる少女" />
      </div>
      {/* <p className="set-question"></p> */}
      <SetQuestion pareClassName="set-quesArea" className="set-question" wordArray={Questions} />
      <form id="answer-form">
        <input className="input-answer" name="user-input" type="text" /*enterkeyhint="done"*/ placeholder="回答を入力"/>
      </form>
      <Button className="judgement-answer-btn" variant="primary" label="答え" />
      <Button className="return-menu-btn" variant="subtle" label="メニューに戻る" />
    </div>
  )
}