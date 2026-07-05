import "/src/components/Button.css";

export default function Button({label, className, variant, onUpdate, onPhaseChange }){
  return(
      <button
        className={`${className} ${variant}`}
        onClick={
          onUpdate && onPhaseChange ? () => { onUpdate(label); onPhaseChange(); }
          : onUpdate ? onUpdate(label)
          : onPhaseChange }>
          {label}
      </button>
  )
}