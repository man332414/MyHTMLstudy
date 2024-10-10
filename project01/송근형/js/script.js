// 문제 1 시작
//step1 변수 선언
let pSM = document.querySelector(".pSM");
// console.log(pSM);
let subMenu = document.querySelector("#subMenu")
let count = 0

//step2 이벤트 연결
pSM.addEventListener("click", appearSM)

//step3 함수 
function appearSM() { //클릭 시 서브메뉴 등장
  console.log(count);
  if (count % 2 == 0) {
    // console.log("connected");
    subMenu.style.opacity = "1";
  } else {
    subMenu.style.opacity = "0";
  }
  count++
}

// 문제 1 종료
// 문제 2 시작

//step1 변수선언
let msLeftBtn = document.querySelector("#msLeftBtn");
// console.log(msLeftBtn);
let msRightBtn = document.querySelector("#msRightBtn");
let contentBox = document.querySelector(".contentBox")
// console.log(contentBox);
let content = document.querySelectorAll(".content");
//console.log(content);

let idx = 0;

//step2 이벤트 연결

msLeftBtn.addEventListener("click", moveLeft);
msRightBtn.addEventListener("click", moveRight);

//step3 함수
function moveLeft() {
  idx--
  if (idx < 0) {
    idx = content.length - 1;
  }
  contentBox.style.transform = `translateX(-${Number(idx * 100)}%)`;
}
function moveRight() {
  idx++
  if (idx >= content.length) {
    idx = 0
  }
  contentBox.style.transform = `translateX(-${Number(idx * 100)}%)`;
}


// 문제 3 종료
// 문제 4 시작

// //step 1 변수 선언
// let tabHandles = document.querySelectorAll(".tabHandles>li");
// // console.log(tabHandles);
// let tabContent = document.querySelectorAll(".tabContent");

// //step 2 이벤트 연결
// tabHandles.forEach(
//   function (idx) {
//     idx.addEventListener("click", tabClick);
//   }
// );

// //step 3 함수
// function tabClick() { // 클릭하면 배경 부여하고 원래 부여되어 있던 것 뺏기
//   let num = this.getAttribute("class").charAt(3);
//   // console.log("connected");
//   console.log(num);
//   tabHandles.forEach(function (idx) {
//     idx.classList.remove("active");
//   });
//   this.classList.add("active");
//   // console.log(this);
//   // console.log(this.classList.value);

//   tabFunction(num);
// }

// function tabFunction(num) {//클릭된 탭에 따라 사진 분류
//   tabContent.forEach(
//     function (idx) {
//       idx.style.display = "none"
//     }
//   );
//   for (let i = 0; i < tabContent.length; i++) {
//     if (tabContent[i].getAttribute("id").indexOf(num) !== -1) {
//       tabContent[i].style.display = "block";
//     }
//   }
// }

//문제 4 종료

//문제 4 다시 짜기

//step1 변수선언
let handles = document.querySelectorAll(".tabHandles li");
console.log(handles);
let contents = document.querySelectorAll(".tabContent");
console.log(contents);

//step2 이벤트 연결
handles.forEach(function(idx){
  idx.addEventListener("click", tabClick);
});

//step3 함수 
function tabClick(){
  // console.log("connected")
  let getClass = this.getAttribute("id");
  console.log(getClass);
  this.classList.add("active");

  removeActive(getClass);
  tabHidden();
}

function removeActive(getClass){
  handles.forEach(function(idx){
    if(getClass != idx.getAttribute("id")){
      idx.classList.remove("active");
    }
  });
}

// function 