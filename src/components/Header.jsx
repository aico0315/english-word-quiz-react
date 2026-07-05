import "/src/components/Header.css";

export default function Header({ onToggleTheme, className, onReturn }){
  return (
    <header className={className}>
      <h1 className="web-title" onClick={onReturn}>STUDY</h1>
      <button onClick={onToggleTheme} className={`theme-toggle ${className}`} aria-label="ダークモードに切り替え">
        <span className="knob"></span>
      </button>
    </header>
  )
}