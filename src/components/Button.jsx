// import "/src/components/Button.css";

export default function Button({label, className, variant}){
  return(
      <button className={`${className} ${variant}`}>{label}</button>
  )
}