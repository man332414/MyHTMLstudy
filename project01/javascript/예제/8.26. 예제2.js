// step1 select
// step2 add event
// step3 define function

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