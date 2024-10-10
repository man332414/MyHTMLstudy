//메인 글자 슬라이더 시작
//step1 변수 선언
let mRightBtn = document.querySelector("#rightMain")
// console.log(mRightBtn);
let mLeftBtn = document.querySelector("#leftMain")
let msBoxes = document.querySelector("#main ul").children;
// console.log(msBoxes);
let msBox = document.querySelector("#main ul");
// console.log(mLeftBtn);
// step2 이벤트 연결
mRightBtn.addEventListener("click", moveToright);
mLeftBtn.addEventListener("click", moveToleft);
let idx = 0;
//step3 함수 선언
function moveToright(){ // 오른쪽 버튼 클릭 시 메인 ul 오른쪽으로 이동
  idx++;
  if(idx>=msBoxes.length){
    idx=0;
  }
  msBox.style.transform = `translateX(-${Number(idx*100)}%)`;
  // console.log("connected")
}
function moveToleft(){ // 오른쪽 버튼 클릭 시 메인 ul 오른쪽으로 이동
  idx--;
  if(idx<0){
    idx=msBoxes.length-1;
  }
  msBox.style.transform = `translateX(-${Number(idx*100)}%)`;
  // console.log("connected")
}

// 메인 글자 슬라이더 끝
//프로젝트 탭 시작
/* 탭을 눌렀을 때 탭 제목 액티브 클래스 추가
밑에 컨텐츠 박스 필터에 맞게 정렬*/
//step1 변수 선언
let tabHandles = document.querySelectorAll("#tabHandle li");
//console.log(tabHandles);
let contents = document.querySelectorAll("#tabContent li")
//console.log(contents)

//step2 이벤트 연결
 tabHandles.forEach(
  function(idx){
  idx.addEventListener("click", clicked);
  idx.style.transition = "all, .4s"
  idx.style.cursor = "pointer"
  }
);

//step3 함수설정
function clicked(){ // 눌렀을 때 액티브 클래스 부여
  let num = this.getAttribute("id");
  //console.log(num);
  // console.log("connected");
  // console.log(this);
  this.classList.add("active");

  removeActive(num);
  tabFunction();
  appearContent(num);
}

function removeActive(num){ // 선택되지 않은 탭은 액티브 제거
  tabHandles.forEach(function(idx){
    if(num != idx.getAttribute("id")){
      idx.classList.remove("active");
    }
  });
}  

function tabFunction(){ // 선택되지 않은 컨텐츠 숨김
  contents.forEach(function(idx){
    idx.style.display = "none"
  }
);
}

function appearContent(num){ // 클릭 시 선택된 애들 나타나기
  contents.forEach(function(idx){
    let contentClass = idx.getAttribute("class");
    if(contentClass.indexOf(num) !== -1){
      idx.style.display = "block"
      // console.log(contentClass);
    }
  });
}

//프로젝트 탭 끝
//테스트모니얼 슬라이더 시작

//step1 변수선언
let tLeftBtn = document.querySelector("#leftTestimonial");
let tRightBtn = document.querySelector("#rightTestimonial");
//console.log(tLeftBtn);
let tIdx = 0;
let tsBox = document.querySelectorAll("#testimonialSlideContent");
//console.log(tsBox)
let tsBoxes = document.querySelector("#testimonialSlide");
//console.log(tsBoxes)

//step2 이벤트 연결
tLeftBtn.addEventListener("click", tesiMoveLeft);
tRightBtn.addEventListener("click", tesiMoveRight);

//step3 함수선언
function tesiMoveLeft(){ // 왼쪽으로 움직이기
  // console.log("connected");
  tIdx--;
  if(tIdx<0){
    tIdx = tsBox.length-1;
  }
  tsBoxes.style.transform = `translateX(-${Number(tIdx*100)}%)`
}
function tesiMoveRight(){ // 왼쪽으로 움직이기
  // console.log("connected");
  tIdx++;
  if(tIdx>=tsBox.length){
    tIdx = 0;
  }
  tsBoxes.style.transform = `translateX(-${Number(tIdx*100)}%)`
}