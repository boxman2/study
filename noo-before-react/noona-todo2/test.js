'use strict';
let taskInput = document.querySelector(".task-input")
let addButton = document.querySelector(".button-add")
let taskBoard = document.querySelector("#task-board")
let tabs = document.querySelectorAll(".tab-type div")
let taskList = []
let mode = "tab-all"
let filterList = []

let underLine = document.querySelector(".tab-underline")




for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click",function (event){filter(event)})
}
a
addButton.addEventListener("click", a)
taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    a(event);
  }
});

function filter(event) {
    if(event){
        underLine.style.width = event.currentTarget.offsetWidth + "px"
        underLine.style.top = event.currentTarget.offsetTop + (event.currentTarget.offsetHeight - 4) + "px"
        underLine.style.left = event.currentTarget.offsetLeft + "px"
        mode = event.target.id
    }

    filterList = []
    if (mode == "tab-all") {
        render()
    } else if (mode == "tab-not-done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]["isComplete"] == false) {
                filterList.push(taskList[i])
            }
        }
    } else if (mode == "tab-done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]["isComplete"] == true) {
                filterList.push(taskList[i])
            }
        }
    }
    render()
}

function a () {
    let task = {
        "content" : taskInput.value,
        "isComplete" : false,
        "id" : Date.now()
    }
    taskList.push(task)
    taskInput.value =''
    render()
}

function render (){
    let list = [];
    if(mode == "tab-all"){
        list = taskList
    } else if (mode == "tab-not-done"|| mode == "tab-done"){
        list = filterList
    }
    let result = ''
    for(let i=0; i<list.length; i++){
        if(list[i]["isComplete"]== false){
            result += `<div class ="task">
                    <span>
                        ${list[i]["content"]}
                    </span>
                    <div class="button-box">
                        <button onclick="checkComplete(${list[i]["id"]})"><i class="fa-solid fa-check"></i></button>
                        <button onclick="deleteComplete(${list[i]["id"]})"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>`
        }else{
            result += `<div class ="task task-done">
                    <span>
                        ${list[i]["content"]}
                    </span>
                    <div class="button-box">
                        <button onclick="checkComplete(${list[i]["id"]})"><i class="fa-solid fa-undo-alt"></i></button>
                        <button onclick="deleteComplete(${list[i]["id"]})"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>`
        }
    }
    taskBoard.innerHTML = result
}

function checkComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(id === taskList[i]["id"]){
            taskList[i]["isComplete"]= !taskList[i]["isComplete"]
        }
    }render()
}

function deleteComplete(id){
    for (let i = 0; i < taskList.length; i++) {
        if (id === taskList[i]["id"]) {
            taskList.splice(i, 1)
        }
    }
    filter()
}

