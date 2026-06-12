import "/src/components/wordRecords.js";

export default function CounterDisplay({currentNum, totalLength}){
  return (
    <div className="counter-area">{`${currentNum} / ${totalLength}`}</div>
  )
}