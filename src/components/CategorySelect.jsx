import Button from "./Button";
import "/src/components/Button.css";
import "./Dashboard.css";
import "./CategorySelect.css";
import getSortedCategories from "../utils/getSortedCategories";

export default function CategorySelect ({ className, wordArray, onUpdate, onClose, onDisplay, onScreenLifecycle }){
  const categories = getSortedCategories(wordArray);
  console.log(onDisplay);

  return(
    <div className={`modal-overlay ${className}`}>
      <div className="mode-select-area menu-list active">
        {categories.map(elem=>
          <Button className="category-btns-container category-btns" variant="text" label={elem} key={elem} onUpdate={onUpdate} onPhaseChange={onDisplay} onPhaseChange={onScreenLifecycle}/>
        )}
        <Button className="weak-words-btn category-btns" variant="text" label="苦手な単語"/>
        <Button className="question-continue-btn category-btns" variant="text" label="つづきから"/>
        <Button className="close-btn" variant="subtle" label="× 閉じる" onClick={onUpdate} onPhaseChange={onClose}/>
      </div>
    </div>
  )
}