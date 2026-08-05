import '/src/components/Dashboard.css';
import Button from './Button';
import talkingChildren from '/src/assets/talkingChildren.png'

interface DashboardProps {
  className: string;
  onOpen: ()=> void;
  onDisplay: ()=> void;
}

export default function Dashboard({ className, onOpen, onDisplay }: DashboardProps){
  return (
    <div className={`menu-area ${ className }`}>
      <Button className="question-newStart-btn menu-item" label="はじめる" onPhaseChange={onOpen}/>
      <Button className="add-newQuestion-btn menu-item" label="単語を追加する" onPhaseChange={onDisplay}/>
      <img className='menuArea-img-area' src={ talkingChildren } alt="話ている子どもたち" />
    </div>
  )
}