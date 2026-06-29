import "/src/components/Header.css";

export default function Header({ onToggleTheme, className }){
  return (
    <header className={className}>
      <h1 className="web-title">STUDY</h1>
      <button onClick={onToggleTheme} className="theme-toggle" aria-label="ダークモードに切り替え">
        <span className="knob"></span>
      </button>
    </header>
  )
}