import Button from "./Button";
import "/src/components/Button.css";
import "./Dashboard.css";
import "./CategorySelect.css";

export default function CategorySelect ({ className }){
  const categories = ["IT用語", "稜語録", "gitHub"]

  return(
    <div className={`modal-overlay ${className}`}>
      <div className="mode-select-area menu-list active">
        {categories.map(elem=>
          <Button className="category-btns-container category-btns" variant="text" label={elem} key={elem}/>
        )}
        <Button className="weak-words-btn category-btns" variant="text" label="苦手な単語"/>
        <Button className="question-continue-btn category-btns" variant="text" label="つづきから"/>
        <Button className="close-btn" variant="subtle" label="× 閉じる"/>
      </div>
    </div>
  )
}