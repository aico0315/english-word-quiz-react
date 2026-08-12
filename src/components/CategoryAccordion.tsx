import getSortedCategories from "../utils/getSortedCategories"
import getWordsByCategory from "../utils/getWordsByCategory";
import WordAccordion from "./WordAccordion";
import type { Word } from "../types";

interface CategoryAccordionProps {
  allWords: Word[];
  handleClickSetId: (wordId: string)=> void;
  handleClickDelete: (wordId: string)=> void;
  wordRefs: React.RefObject<{ [key: string]: | HTMLDetailsElement | null }>;
}

export default function CategoryAccordion({ allWords, handleClickSetId, handleClickDelete, wordRefs }: CategoryAccordionProps){
  const sortedCategories = getSortedCategories(allWords);

  return(
    sortedCategories.map(category => {
      const words = getWordsByCategory(allWords, category);
      return(
        <details key={category}>
            <summary>{category}</summary>
            <WordAccordion uniqueCategoryWord={words} handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete } wordRefs={ wordRefs }/>
        </details>
      )
    })
  )
}