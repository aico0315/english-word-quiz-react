import getSortedCategories from "../utils/getSortedCategories"
import getWordsByCategory from "../utils/GetWordsByCategory";
import WordAccordion from "./WordAccordion";

export default function CategoryAccordion({allWords}){
  const sortedCategories = getSortedCategories(allWords);

  return(
    sortedCategories.map(category => {
      const words = getWordsByCategory(allWords, category);
      return(
        <details key={category}>
            <summary>{category}</summary>
            <WordAccordion uniqueCategoryWord={words} />
        </details>
      )
    })
  )
}