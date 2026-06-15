import "/src/components/QuestionScreen.css";
import "/src/components/AnswerScreen.css";

export default function SetQuestion({wordArray, answer, pareClassName, className}){
  return (
    <div className={pareClassName}>
      <p className={className}>{wordArray[18].question}</p>
      {answer && (
        <>
          <p className="correct-answer-title">こたえ</p>
          <p className="correct-answer">{ wordArray[18].answer[0] }</p>
          <p className="supplement-message">{ wordArray[18].supplement }</p>
        </>
        )}
    </div>
  )
}