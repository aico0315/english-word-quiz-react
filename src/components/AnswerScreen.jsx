import SetQuestion from "./SetQuestion";
import CounterDisplay from "./CounterDisplay";
import ResultMessageDisplay from "./ResultMessageDisplay";
import "/src/components/AnswerScreen.css";
import Button from "./Button";
// import { wordRecords } from "./wordRecords";

export default function AnswerScreen ({ wordArray, className, onCurrentIndex, onCurrentWord, onDisplay, userInput, isCorrect, onReturn }){
  const wordsCount = wordArray.length;
  const currentIndex = onCurrentIndex + 1;


  return(
    <div id="answer-view" className={`answer-area hidden ${ className }`}>
      <CounterDisplay currentNum={ currentIndex } totalLength={ wordsCount } />
      <ResultMessageDisplay result={ isCorrect } />
      <SetQuestion pareClassName="correct-answer-area" className="correct-answerArea-question" wordArray={ onCurrentWord } answer={ wordArray } />
      <div className="user-answer-area">
        <p className="user-answer-title">あなたのこたえ</p>
        <p className="user-answer">{ userInput }</p>
      </div>
      <Button className="next-question-btn" label="次の問題" variant="primary" onPhaseChange={ onDisplay }/>
      <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle" onPhaseChange={onReturn} />
    </div>
  )
}