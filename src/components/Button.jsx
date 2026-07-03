import "/src/components/Button.css";

export default function Button({label, className, variant, onUpdate, onToggle }){
  return(
      <button
        className={`${className} ${variant}`}
        onClick={onUpdate ? () => onUpdate(label) : onToggle}>
          {label}
      </button>
  )
}