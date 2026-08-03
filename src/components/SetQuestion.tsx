import "/src/components/QuestionScreen.css";
import "/src/components/AnswerScreen.css";
import type { Word } from "../types";

interface SetQuestionProps {
  wordArray: Word;
  answer?: Word;
  pareClassName: string;
  className: string;
}

export default function SetQuestion({ wordArray, answer, pareClassName, className }: SetQuestionProps){
  return (
    <div className={ pareClassName }>
      <p className={ className }>{ wordArray.question }</p>
      { answer && (
        <>
          <p className="correct-answer-title">こたえ</p>
          <p className="correct-answer">{ wordArray.answer[0] }</p>
          <p className="supplement-message">{ wordArray.supplement }</p>
        </>
        ) }
    </div>
  )
}