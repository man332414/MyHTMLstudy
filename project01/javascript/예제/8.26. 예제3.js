// step1 select
// step2 add event
// step3 define function

//nav top drop down function start
let parentNTSM = document.querySelector("#pMoney");
// console.log(parentNTSM);

parentNTSM.addEventListener("mouseover", appearSM);
parentNTSM.addEventListener("mouseout", disappearSM)

function appearSM(){ // when mouseover appear submenu #money 
  // console.log("connected")
  let subMenuMoney = document.querySelector("#money");
  // console.log(subMenuMoney);
  subMenuMoney.style.opacity = "1";
  subMenuMoney.style.transform = "translateY(-15%)";
  subMenuMoney.style.visibility = "visible";
}

function disappearSM(){// when mouseout disappear submenu #money 
  // console.log("connected")
  let subMenuMoney = document.querySelector("#money");
  subMenuMoney.style.opacity = "0";
  subMenuMoney.style.transform = "translateY(0%)";
  subMenuMoney.style.visibility = "hidden";
}
//nav top drop down function end

//nav logoNmenus drop down function start

let parentNMSM = document.querySelector("#pSubMenu");
// console.log(parentNMSM);

parentNMSM.addEventListener("mouseover", appearNMSM);
parentNMSM.addEventListener("mouseout", disappearNMSM);

function appearNMSM(){ // 서브메뉴 나타나기
  let nMSM = document.querySelector("#subMenu");
  // console.log(nMSM);
  nMSM.style.transform = "translateY(-15%)"
  nMSM.style.opacity = "1"
  nMSM.style.visibility = "visible"
}

function disappearNMSM(){ // 서브메뉴 사라지기
  let nMSM = document.querySelector("#subMenu");
  // console.log(nMSM);
  nMSM.style.transform = "translateY(0%)"
  nMSM.style.opacity = "0"
  nMSM.style.visibility = "hidden"
}
//nav logoNmenus drop down function end
//main slide function start
let sLeft = document.querySelector("#left");
let sRight = document.querySelector
("#right");
let slideBoxes = document.querySelector("#mainBoxes");
let slideBox = document.querySelectorAll("#mainBox")
//변수 선언
// console.log(slideBoxes);
// console.log(slideBox);
// console.log(sLeft);
// console.log(sRight);
sLeft.addEventListener("click", slideMoveLeft)
sRight.addEventListener("click", slideMoveRight)
//이벤트 할당

let idx = 0; // 함수들에서 사용할 i 선언
function slideMoveLeft(){ //왼쪽 버튼 클릭 시 왼쪽으로 이동
  // console.log("connected");
  // console.log(idx);
  idx--;
  if(idx<0){
    idx=slideBox.length-1; // 슬라이드 박스들의 길이 2-1 = idx가 0보다 작으면 1 집어넣음
  }
  slideBoxes.style.transform = `translateX(-${Number(idx*100)}%)`;
  // console.log(`translateX(-${Number(idx*100)}%)`);
}

function slideMoveRight(){
  // console.log("connected");
  idx++
  if(idx>=slideBox.length){
    idx=0;
  }
  slideBoxes.style.transform = `translateX(-${Number(idx*100)}%)`;
}



//main slide function end
let tabs = document.querySelectorAll(".tab"); //탭들 변수 선언
// console.log(tabs);
let contentAll = document.querySelectorAll(".productBox"); // 모든 컨텐츠 박스 변수 선언

for(let i = 0; i<tabs.length; i++){ // 탭별 이벤트 연결
  tabs[i].addEventListener("click", tabCalculator);
  // console.log(tabs[i]);
}

tabs[0].className = "tab active" // 첫 화면에 모든상품 띄우기
for(let i=0; i<contentAll.length; i++){
  contentAll[i].style.display = "block"; 
}


function tabCalculator(){ // 컨텐츠 아이디 계산
  let contentId = 'pdtB' + this.id.charAt(this.id.length -1); 
  if(this.id.charAt(this.id.length -1) == 0){
    contentId = 'productBox'
  } // 컨텐츠 정렬 시 모든 컨텐츠는 id가 아닌 클래스를 활용하여 등장
  // console.log(contentId);
  activeTab(this);
  productSort(contentId);
}

function activeTab(tab){ // 탭 클릭 시 클릭한 탭에 액티브 클래스 추가
  for(let i = 0; i < tabs.length; i++){
    tabs[i].className = "tab"
  }
  // console.log(tab);

  tab.className = "tab active";
}

function productSort(contentId){ // 상품 정렬
  for(let i=0; i<contentAll.length; i++){
    contentAll[i].style.display = "none"; // 모든 컨텐츠 안보이기
  }
  let cttId = document.querySelectorAll("#"+contentId);
  // console.log("#"+contentId);
  // console.log(cttId);
  if(contentId == 'productBox'){
    for(let i=0; i<contentAll.length; i++){
      contentAll[i].style.display = "block";
    }
  } else{
    for(let i=0; i<cttId.length; i++){
      // console.log(cttId[i]);
      cttId[i].style.display = "block";
    }
  }
}