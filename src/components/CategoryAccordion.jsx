import getSortedCategories from "../utils/getSortedCategories"
import { wordRecords } from "./wordRecords";

export default function CategoryAccordion(){
  const sortedCategories = getSortedCategories(wordRecords);

  return(
    sortedCategories.map(category =>
      <details key={category}>
          <summary>{category}</summary>
      </details>
      )
  )
}