import "/src/components/WordManager.css";
import Button from "./Button";
import CategoryAccordion from "./CategoryAccordion";
// import { wordRecords } from "./wordRecords";

export default function WordManager({ className, wordArray, onReturn, newWord, setNewWord, wordReset, handleClickRegistration, handleClickSetId, selectedWordId, handleClickDelete }){

  return(
    <div id="add-question-view" className={`add-question-area ${className}`}>
      {/* <!-- 追加 --> */}
      <div className="add-category-area">
        <p className="word-category">カテゴリーを登録してね</p>
        <input className="input-category" type="text" list="category-list" placeholder="「英単語」や「IT用語」など" value={ newWord.category } onChange={ (e) => setNewWord({...newWord, category: e.target.value}) }/>
        <datalist id="category-list"></datalist>
      </div>
      <div className="add-english-area">
        <p className="word-english">覚えたい英単語を入力してね</p>
        <input className="input-english-word" type="text" name="input-add-question" value={ newWord.question } onChange={ (e) => setNewWord({...newWord, question: e.target.value}) }/>
      </div>
      <div className="add-japanese-area">
        <p className="word-japanese">英単語の日本語を入力してね</p>
        <input className="input-japanese-word" type="text" name="input-add-question" value={ newWord.answer } onChange={ (e) => setNewWord({...newWord, answer: e.target.value}) }/>
      </div>
      <div className="add-supplement-area">
        <p className="supplementary-information">補足情報を入力してね（読み方など）</p>
        <textarea className="input-supplementary-information" type="text" name="input-add-supplementary" value={ newWord.supplement } onChange={ (e) => setNewWord({...newWord, supplement: e.target.value}) }></textarea>
      </div>
      <div className="add-btn-area">
        <Button className="cancel-btn" variant="primary" label="キャンセル" onPhaseChange={ wordReset }/>
        <Button className="add-btn" variant="primary" label={ selectedWordId ? "更新" : "登録" } onPhaseChange={ handleClickRegistration }/>
      </div>
      {/* <!-- 編集 --> */}
      <div className="edit-question-area">
        <h3 className="edit-question-area-title">登録した単語は<br/>以下から編集できます</h3>
          <div id="editArea-wordList" className="editArea-wordList">
            <CategoryAccordion allWords={ wordArray } handleClickSetId={ handleClickSetId } handleClickDelete={ handleClickDelete }/>
          </div>
      </div>
      <Button className="return-menu-btn" label="メニューへ戻る" onPhaseChange={onReturn} />
    </div>
  )
}