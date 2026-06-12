import "/src/components/Header.css";

export default function Header(){
  return (
    <header>
      <h1 className="web-title">STUDY</h1>
      <button className="theme-toggle" aria-label="ダークモードに切り替え">
        <span className="knob"></span>
      </button>
    </header>
  )
}