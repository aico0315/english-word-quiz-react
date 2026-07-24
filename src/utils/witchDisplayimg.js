export default function whichDisplaySvg (){
  questionAreaImgRight.innerHTML = "";
  questionAreaImgLeft.innerHTML = "";

  if(currentIndex % 2 === 0){
    questionAreaImgRight.innerHTML = images.worryBoyBlue;
  }else{
    questionAreaImgLeft.innerHTML = images.worryGirlWaterBlue;
  }
}