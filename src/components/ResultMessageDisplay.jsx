export default function ResultMessageDisplay({result}){

  return(
    <>
      {result ? (
        <div className="result-message-area">
          <img className="result-message-icon-left" src="/src/assets/correctGirl.svg" alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message">正解！</p>
          <img className="result-message-icon-left" src="/src/assets/correctBoy@72x.webp" alt="腕で大きな丸を作り正解を示す少年" />
        </div>
        ) : (
        <div className="result-message-area">
          <img className="result-message-icon-left" src="/src/assets/notCorrectBoyGreen.svg" alt="腕で大きな丸を作り正解を示す少女" />
          <p className="result-message">残念！</p>
          <img className="result-message-icon-left" src="/src/assets/notCorrectGirl.svg" alt="腕で大きな丸を作り正解を示す少年" />
        </div>
      )}
    </>
  );
}
