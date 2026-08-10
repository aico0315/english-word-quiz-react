import WordDetail from "./WordDetail"
import type { Word } from "../types";

interface WordAccordionProps {
  uniqueCategoryWord: Word[];
  handleClickSetId: (wordId: string)=> void;
  handleClickDelete: (wordId: string)=> void;
  wordRefs: React.RefObject<{ [key: string]: HTMLDetailsElement | null }>;
}

export default function WordAccordion({ uniqueCategoryWord, handleClickSetId, handleClickDelete, wordRefs }: WordAccordionProps){
  return(
    uniqueCategoryWord.map((word, index) =>
      <details key={word.id} ref={(el) => { wordRefs.current[word.id] = el }}>
        <summary className="word-summary">
          <span>{index + 1}.{word.question}</span>
          <span>/ {word.answer[0]}</span>
          <span>︙</span>
        </summary>
        <WordDetail word={ word } handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete }/>
      </details>
    )
  )
}