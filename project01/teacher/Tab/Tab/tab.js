// 탭 클릭 이벤트 추가
//step1. 셀렉트하기
var tabs = document.querySelectorAll('.tab');

//step2. 이벤트 할당하기
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabIdCalculator);
}

function tabIdCalculator() {
  var tabId = 'content' + this.id.charAt(this.id.length - 1);
  //tabId = 클릭한 객체의 id에서 맨뒷숫자
  activateTab(this); // 탭 메뉴에 대한 내용
  showTabContent(tabId); //탭 컨텐츠에 대한 내용
}

// 초기 탭 설정
activateTab(tabs[0]); // 탭 메뉴
showTabContent('content1'); //탭 컨텐츠

//클릭한 탭 메뉴 배경색상 바꾸기
//클릭한 탭에 대한 처리가 필요. 매개변수로 this로 받아야함.
function activateTab(tab) { //tab : 클릭한 객체 전달, 탭 메뉴 div 데이터가 들어가 있다.
  
  // 모든 탭 비활성화
  var tabs = document.querySelectorAll('.tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = 'tab'; // 클래스 이름을 초기화
  }

  // 선택한 탭 활성화
  tab.className = 'tab active'; // active 클래스 추가
}

//모든 탭 내용 숨기고 선택한 탭 내용 표시하기
function showTabContent(tabId) {
  // 모든 탭 내용 숨기기
  var contents = document.querySelectorAll('.tab-content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
    // display 속성으로 숨김
  }

  // 선택한 탭 내용 표시
  var activeContent = document.querySelector("#" + tabId);
  if (activeContent) {
    activeContent.style.display = 'block'; // display 속성으로 표시
  }
}


