import "/src/components/AllAnsweredView.css";
import happyBoysAndGirls from "/src/assets/happyBoysAndGirls.png";
import Button from "./Button";

export default function AllAnsweredView({ className, onReturn }){
  return(
    <div id="clear-view" className={`clear-area ${ className }`}>
      <p className="clear-message">全問回答</p>
      <p className="clear-text">全問回答しました<br/>もう一度挑戦しますか？</p>
      <Button className="retry-btn" label="挑戦する" variant="primary" />
      <Button className="wrong-word-btn" variant="subtle" label="よく間違える単語に挑戦"/>
      <Button className="return-menu-btn" variant="subtle" label="メニューへ戻る" onPhaseChange={ onReturn }/>
      <img className="clear-img-area" src={ happyBoysAndGirls } alt="両手でバンザイをして喜ぶ5人の少年少女" />
    </div>
  )
}