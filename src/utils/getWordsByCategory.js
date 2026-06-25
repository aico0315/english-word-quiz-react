//カテゴリーで単語を絞り込んで返す
export default function getWordsByCategory (wordsArray, category){
  const wordsByCategories = wordsArray.filter(word => (word.category || "未設定") === category);
  //filter()の比較条件に合った(true)要素のみを配列にして返す

  return wordsByCategories;
}