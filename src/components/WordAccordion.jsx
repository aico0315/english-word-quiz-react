export default function WordAccordion({uniqueCategoryWord}){
  return(
    uniqueCategoryWord.map(word =>
      <details key={word.id}>
        <summary>{word.question} / {word.answer[0]}</summary>
      </details>
    )
  )
}