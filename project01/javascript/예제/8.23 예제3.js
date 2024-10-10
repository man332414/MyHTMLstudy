let left = document.querySelector("#left")
let right = document.querySelector("#right")

let slide = document.querySelector("#sliderContents").children;
console.log(slide);

left.addEventListener("click", slideFlowLeft);
right.addEventListener("click", slideFlowRight);

let idx=0;
function slideFlowLeft(){
  idx--
  if(idx < 0 ){
    idx = slide.length-1;
  }
  console.log(idx);
  document.querySelector("#sliderContents").style.transform=`translateX(-${Number(idx*100)}%)`
}
function slideFlowRight(){
  idx++
  if(idx > slide.length-1){
    idx = 0;
  }
  console.log(idx);
  document.querySelector("#sliderContents").style.transform=`translateX(-${Number(idx*100)}%)`
}