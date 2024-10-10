//step1 selecte
//step2 add event listener
//step3 create function

let tabs = document.querySelectorAll(".tab");
console.log(tabs)

for(let i = 0; i<tabs.length; i++){
  tabs[i].addEventListener("click", tabCalculator);
}

function tabCalculator(){
  // console.log("connected")
  let tabId = 'content' + this.id.charAt(this.id.length-1);
  console.log(tabId);
  activeTab(this);
  showTabContent(tabId);
}

function activeTab(tab){
  for(let i = 0; i<tabs.length; i++){
    tabs[i].className = 'tab';
  }

  tab.className = 'tab active';
}

function showTabContent(tabId){
  let tabContent = document.querySelectorAll(".tab-content");
  for(let i = 0; i<tabs.length; i++){
    tabContent[i].style.display = 'none';
  }
document.querySelector(`#`+tabId).style.display = 'block';
  }