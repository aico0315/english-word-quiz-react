import SetQuestion from "./SetQuestion";
import CounterDisplay from "./CounterDisplay";
import ResultMessageDisplay from "./ResultMessageDisplay";
import "/src/components/AnswerScreen.css";
import Button from "./Button";
import type { Word } from "../types";

interface AnswerScreenProps {
  wordArray: Word[];
  className: string;
  onCurrentIndex: number;
  onDisplay: ()=> void;
  userInput: string;
  isCorrect: boolean;
  onReturn: ()=> void;
  selectedCategory: string;
}

export default function AnswerScreen ({ wordArray, className, onCurrentIndex, onDisplay, userInput, isCorrect, onReturn, selectedCategory}: AnswerScreenProps){
  const wordsCount = wordArray.length;
  const currentIndex = onCurrentIndex;
  const currentIndexDisplay = onCurrentIndex + 1;

  return(
    <>
      <p className="selected-category">カテゴリー：{ selectedCategory }</p>
      <div id="answer-view" className={`answer-area ${ className }`}>
        <CounterDisplay currentNum={ currentIndexDisplay } totalLength={ wordsCount } />
        <ResultMessageDisplay result={ isCorrect } />
        <SetQuestion pareClassName="correct-answer-area" className="correct-answerArea-question" wordArray={ wordArray[currentIndex] } answer={ wordArray[currentIndex] } />
        <div className="user-answer-area">
          <p className="user-answer-title">あなたのこたえ</p>
          <p className="user-answer">{ userInput }</p>
        </div>
        <Button className="next-question-btn" label="次の問題" variant="primary" onPhaseChange={ onDisplay }/>
        <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle" onPhaseChange={onReturn} />
      </div>
    </>
  )
}