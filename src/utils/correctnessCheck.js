import normalizeInput from "./normalizeInput";

//正誤判定関数
export default function correctnessCheck (userInput, currentAnswer){
  const normalizedUserInput = normalizeInput(userInput);
  const normalizedCurrentAnswer = currentAnswer.map(ans => normalizeInput(ans));

  return normalizedCurrentAnswer.includes(normalizedUserInput);
}