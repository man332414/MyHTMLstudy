// Step 1 Selector
// 좌우 이미지에 클래스 .left 와 .right를 먼저 할당한다
var left = document.querySelector(".left");
var right = document.querySelector(".right");
console.log(left);
console.log(right);

var lis = document.querySelectorAll('#sliders li');
console.log(lis);

// Step 2 이벤트 할당
left.addEventListener("click",leftsliding);
right.addEventListener("click",rightsliding);
//Step 4 전역변수 선언
var count=0;
// Step 3 함수생성
//
function leftsliding(){
    count = count -1;
    // 음수값이되면 안되므로 li의 갯수 값을 넣어줌 현재는 2
    console.log(lis.length);
    if(count < 0 ){
        count = (lis.length-1); //2을 입력
    }
    sliding(count); //현재 count 값을 가지고 sliding 함수로 이동
}
function rightsliding(){
    count = count +1;
    // 마지막 슬라이더 번호보다 크다면 안됨
    if(count >= (lis.length) ){
        count = 0; //3을 입력
    }
    sliding(count); //현재 count 값을 가지고 sliding 함수로 이동
}
function sliding(value){
    console.log("슬라이딩함수");
    console.log(value);
    lis.forEach(function (slide) {
        slide.style.transform = `translateX(-${value * 100}%)`;
      });  //translateX(-200%)와 같음, ${}는 문자 안에서 수식을 계산하는 방법임
}

