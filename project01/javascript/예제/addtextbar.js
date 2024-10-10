//step 1 변수 선언
let itemList = [];
let addBtn = document.querySelector(".addBtn");
//console.log(addBtn);
let draggable
let dropBox = document.querySelector("#dropBox");
//console.log(dropBox);

//step 2 이벤트 연결
addBtn.addEventListener("click", addList);
dropBox.addEventListener("dragover", function(e){
  e.preventDefault();
  //console.log("over connected");
});

dropBox.addEventListener("drop", function(e){
  //console.log("drop connected");
  e.preventDefault();
  let grapped = document.querySelector(".grapped");
  dropBox.appendChild(grapped);
  let delIdx = this.lastChild.lastChild.getAttribute("onclick").charAt(4)
  del(delIdx);
});

//step 3 함수 구성
function addList() { // 사용자 입력값 받아오기
  let inputValue = document.querySelector('#item').value;
  if (inputValue !== "" && inputValue !== " ") {
    itemList.push(inputValue); // 공백 입력 안받음
    showList();
  } else {
    return 0;
  }
}

function showList() {
  let list;
  list = `<ul> 리스트 갯수 ${itemList.length}개`;
    for (let i = 0; i < itemList.length; i++) {
      list += `<li draggable = "true"> ${itemList[i]} <div id="delBtn" onclick="del(${i})"> X </div></li>`;
    }
    list += "</ul>";
    //console.log(list);
    document.querySelector('#itemList').innerHTML = list;
    draggable = document.querySelectorAll("li"); // 드래그 변수 선언
    //console.log(draggable);
    draggable.forEach( // 드래그 이벤트 선언
    function (idx) {
      idx.addEventListener("dragstart", dragStart)
      idx.addEventListener("dragend", dragEnd)
    });
    document.querySelector('#item').value = ""
  }

function del(index) {
  itemList.splice(index, 1);
  showList()
}

function dragStart() {
  this.classList.add("grapped")
  //console.log(this)
  //console.log("connected");
}

function dragEnd() {
  this.classList.remove("grapped")
  //console.log("connected");
}