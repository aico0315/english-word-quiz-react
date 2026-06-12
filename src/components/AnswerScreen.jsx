import SetQuestion from "./SetQuestion";
import CounterDisplay from "./CounterDisplay";
import "/src/components/AnswerScreen.css";
import Button from "./Button";
import { wordRecords } from "./wordRecords";

export default function AnswerScreen ({ wordArray }){
  const DummyCurrentIndex = 1;
  const DummyWords = wordArray.length;

  return(
    <div id="answer-view" className="answer-area hidden">
      <CounterDisplay currentNum={DummyCurrentIndex} totalLength={DummyWords} />
      <div className="result-message-area">
        <img className="result-message-icon-left" src="/src/assets/correctGirl.svg" alt="腕で大きな丸を作り正解を示す少女" />
        <p className="result-message">正解！</p>
        <img className="result-message-icon-left" src="/src/assets/correctBoy@72x.webp" alt="腕で大きな丸を作り正解を示す少年" />
      </div>
      {/* <div className="correct-answer-area"> */}
        <SetQuestion pareClassName="correct-answer-area" wordArray={wordRecords} answer={wordArray} />
        
        {/* <p className="correct-answer"></p> */}
        {/* <p className="supplement-message"></p> */}
      {/* </div> */}
      <div className="user-answer-area">
        <p className="user-answer-title">あなたのこたえ</p>
        <p className="user-answer"></p>
      </div>
      <Button className="next-question-btn" label="次の問題" variant="primary"/>
      <Button className="return-menu-btn" label="メニューへ戻る" variant="subtle"/>
      {/* <button className="next-question-btn">次の問題</button>
      <button className="return-menu-btn">メニューへ戻る</button> */}
    </div>
  )
}