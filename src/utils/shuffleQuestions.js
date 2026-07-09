//問題をシャッフルする
export default function shuffleQuestions (wordArray){
  for(let i = wordArray.length -1; i > 0; i --){
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[j], wordArray[i]] = [wordArray[i], wordArray[j]];
  }

  return wordArray;
}