import "/src/components/QuestionScreen.css";
import Button from "./Button";
import "./CounterDisplay";
import CounterDisplay from "./CounterDisplay";
import worryBoyBlue from "/src/assets/worryBoyBlue.svg"
import worryGirlWaterBlue from "/src/assets/worryGirlWaterBlue.svg"
import "/src/components/wordRecords.js";
// import { wordRecords } from "./wordRecords";
import SetQuestion from "./SetQuestion";

export default function QuestionScreen({ className, onReturn, onDisplay, onCurrentWordArray, onCurrentIndex, value, setUserInput }){
  const currentIndex = onCurrentIndex;
  const currentIndexDisplay = onCurrentIndex + 1;
  console.log(onCurrentWordArray);
  const wordsCount = onCurrentWordArray.length;

  return (
    <div id="question-view" className={`question-area hidden ${ className }`}>
      <div className="counter-and-img-area">
        <img className="questionArea-img-left" src={ worryBoyBlue } alt="悩んでいる少年" />
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount }/>
        <img className="questionArea-img-right" src={ worryGirlWaterBlue } alt="悩んでいる少女" />
      </div>
      <SetQuestion pareClassName="set-quesArea" className="set-question" wordArray={ onCurrentWordArray[currentIndex] } />
      <form id="answer-form" onSubmit={(e) => e.preventDefault()}>
        <input className="input-answer" name="user-input" type="text" placeholder="回答を入力" value={value} onChange={(e) => {
          setUserInput(e.target.value);
        }} />
      </form>
      <Button className="judgement-answer-btn" variant="primary" label="答え" onPhaseChange={onDisplay}/>
      <Button className="return-menu-btn" variant="subtle" label="メニューに戻る" onPhaseChange={onReturn} />
    </div>
  )
}