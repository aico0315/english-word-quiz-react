import WordDetail from "./WordDetail"

export default function WordAccordion({uniqueCategoryWord}){
  return(
    uniqueCategoryWord.map((word, index) =>
      <details key={word.id}>
        <summary className="word-summary">
          <span>{index + 1}.{word.question}</span>
          <span>/ {word.answer[0]}</span>
          <span>︙</span>
        </summary>
        <WordDetail word={word}/>
      </details>
    )
  )
}