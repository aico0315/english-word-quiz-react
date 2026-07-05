import '/src/components/Dashboard.css';
import Button from '/src/components/Button';
import talkingChildren from '/src/assets/talkingChildren.png'

export default function Dashboard({ className, onUpdate, onOpen, onDisplay }){
  return (
    <div className={`menu-area ${ className }`}>
      <Button className="question-newStart-btn menu-item" label="はじめる" onClick={onUpdate} onPhaseChange={onOpen}/>
      <Button className="add-newQuestion-btn menu-item" label="単語を追加する" onPhaseChange={onDisplay}/>
      <img className='menuArea-img-area' src={ talkingChildren } alt="話ている子どもたち" />
    </div>
  )
}