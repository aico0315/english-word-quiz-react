import correctGirl from "/src/assets/correctGirl.svg";
import correctBoy from "/src/assets/correctBoy@72x.webp";
import notCorrectBoyGreen from "/src/assets/notCorrectBoyGreen.svg";
import notCorrectGirl from "/src/assets/notCorrectGirl.svg";


export default function ResultMessageDisplay({ result }){

  return(
    <>
      {result ? (
        <div className="result-message-area">
          <img className="result-message-icon-left" src={ correctGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message">正解！</p>
          <img className="result-message-icon-left" src={ correctBoy } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
        ) : (
        <div className="result-message-area">
          <img className="result-message-icon-left" src={ notCorrectGirl } alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message">残念！</p>
          <img className="result-message-icon-left" src={ notCorrectBoyGreen } alt="腕で大きな丸を作り正解を示す少年" />
        </div>
      )}
    </>
  );
}
