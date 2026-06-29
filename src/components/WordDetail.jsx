import Button from "./Button";
import editBtnImg from "../assets/editBtnImg.svg";
import deleteBtnImg from "../assets/deleteBtnImg.svg";

export default function WordDetail({word}){
  const editBtn = <img src={editBtnImg} alt="鉛筆の画像" />
  const deleteBtn = <img src={deleteBtnImg} alt="ゴミ箱の画像" />
  return(
    <div className="word-footer">
      <p>{word.supplement}</p>
      <Button className="edit-btn" variant="edit-btn-img" label={editBtn}/>
      <Button className="delete-btn" variant="delete-btn-img" label={deleteBtn}/>
    </div>
  )
}