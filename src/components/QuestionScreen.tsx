import "/src/components/QuestionScreen.css";
import Button from "./Button";
import "./CounterDisplay";
import CounterDisplay from "./CounterDisplay";
import worryBoyBlue from "/src/assets/worryBoyBlue.svg"
import worryGirlWaterBlue from "/src/assets/worryGirlWaterBlue.svg"
import "/src/components/wordRecords.js";
import SetQuestion from "./SetQuestion";
import type { Word } from "../types";

interface QuestionScreenProps {
  className: string;
  onReturn: ()=> void;
  onDisplay: ()=> void;
  onCurrentWordArray: Word[];
  onCurrentIndex: number;
  value: string;
  setUserInput: React.Dispatch<React.SetStateAction< string >>;
}

export default function QuestionScreen({ className, onReturn, onDisplay, onCurrentWordArray, onCurrentIndex, value, setUserInput }: QuestionScreenProps){
  const currentIndex = onCurrentIndex;
  const currentIndexDisplay = onCurrentIndex + 1;
  console.log(onCurrentWordArray);
  const wordsCount = onCurrentWordArray.length;

  return (
    <div id="question-view" className={`question-area ${ className }`}>
      <div className="counter-and-img-area">
        <img className={`questionArea-img-left ${currentIndex % 2 === 0 ? "": "hidden"}`} src={ worryBoyBlue } alt="悩んでいる少年" />
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount }/>
        <img className={`questionArea-img-right ${currentIndex % 2 !== 0 ? "": "hidden"}`} src={ worryGirlWaterBlue } alt="悩んでいる少女" />
      </div>
      <SetQuestion pareClassName="set-quesArea" className="set-question" wordArray={ onCurrentWordArray[currentIndex] } />
      <form id="answer-form" onSubmit={(e) => e.preventDefault()}>
        <input className="input-answer" name="user-input" type="text" placeholder="回答を入力" value={value} onChange={(e) => {
          setUserInput(e.target.value);
        }} />
      </form>
      <Button className="judgement-answer-btn" variant="primary" label="答え" onPhaseChange={ onDisplay }/>
      <Button className="return-menu-btn" variant="subtle" label="メニューに戻る" onPhaseChange={ onReturn } />
    </div>
  )
}