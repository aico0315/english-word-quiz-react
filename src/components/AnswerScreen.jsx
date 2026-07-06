import SetQuestion from "./SetQuestion";
import CounterDisplay from "./CounterDisplay";
import ResultMessageDisplay from "./ResultMessageDisplay";
import "/src/components/AnswerScreen.css";
import Button from "./Button";
import { wordRecords } from "./wordRecords";

export default function AnswerScreen ({ wordArray, className, onReturn }){
  const DummyCurrentIndex = 1;
  const DummyWords = wordArray.length;

  return(
    <div id="answer-view" className={`answer-area hidden ${ className }`}>
      <CounterDisplay currentNum={DummyCurrentIndex} totalLength={DummyWords} />
      <ResultMessageDisplay result={true} />
      <SetQuestion pareClassName="correct-answer-area" className="correct-answerArea-question" wordArray={wordRecords} answer={wordArray} />
      <div className="user-answer-area">
        <p className="user-answer-title">あなたのこたえ</p>
        <p className="user-answer"></p>
      </div>
      <Button className="next-question-btn" label="次の問題" variant="primary"/>
      <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle" onPhaseChange={onReturn} />
    </div>
  )
}