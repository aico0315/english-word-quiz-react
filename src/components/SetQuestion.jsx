import "/src/components/QuestionScreen.css";

export default function SetQuestion({wordArray, answer, pareClassName, className}){
  return (
    <div className={pareClassName}>
      <p className={className}>{wordArray[0].question}</p>
      {answer && (
        <div >
          <p className="correct-answer-title">こたえ</p>
          <p>{ wordArray[0].answer }</p>
          <p className="supplement-message">{ wordArray[0].supplement }</p>
        </div>
        )}
    </div>
  )
}