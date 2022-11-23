
let addButton =document.getElementById("addButton")
let taskInput =document.getElementById("task-input")
let tabs = document.querySelectorAll(".task-tabs div")
let taskList = []
let filterList = []
let doneList =[]
let mode = 'all'

addButton.addEventListener("click", addTask)

for(let i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click", function(event){filter(event)})
}

function filter (event) {
    mode = event.target.id
    filterList = []
    doneList = []
    if (mode == "all") {
        render()
    } else if (mode == "ongoing") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]["isComplete"] == false) {
                filterList.push(taskList[i])
            }
        }
    } else if (mode == "done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]["isComplete"] == true) {
                filterList.push(taskList[i])
            }
        }
    }render()
}

function addTask () {
    let task = {
        "ID" : Date.now(),
        "taskContent" : taskInput.value,
        "isComplete" : false
    }
    taskList.push(task)
    render()
}

function toggleComplete(id){
   for(let i=0; i<taskList.length; i++){
       if(id == taskList[i]["ID"]){
           taskList[i]["isComplete"]= !taskList[i]["isComplete"]
           break;
       }
   }render()
}

function deleteComplete(id) {
    if (mode == "all") {
        for (let i = 0; i < taskList.length; i++) {
            if (id == taskList[i]["ID"]) {
                taskList.splice(i, 1)
                break;
            }
        }
    } else if (mode == "ongoing") {
        for (let i = 0; i < filterList.length; i++) {
            if (id == filterList[i]["ID"]) {
                filterList.splice(i, 1)
                break;
            }
        }
    } else if (mode == "done") {
        for (let i = 0; i < filterList.length; i++) {
            if (id == filterList[i]["ID"]) {
                filterList.splice(i, 1)
                break;
            }
        }
    }render()
}

function render() {
    let list = []
    if (mode == "all") {
        list = taskList
    } else if (mode == "ongoing") {
        list = filterList
    } else if (mode == "done") {
        list = filterList
    }
    let resultHTML = ''
    for (let i = 0; i < list.length; i++) {
        if (list[i]["isComplete"] == true) {
            resultHTML += `<div class="task">
                  <div class="middle-line">
                      ${list[i]["taskContent"]}
                  </div>
                  <div>
                      <button onclick="toggleComplete(${list[i]["ID"]})">CHECK</button>
                      <button onclick="deleteComplete(${list[i]["ID"]})">DELETE</button>
                  </div>
              </div>`
        } else {
            resultHTML += `<div class="task">
                  <div class>
                      ${list[i]["taskContent"]}
                  </div>
                  <div>
                      <button onclick="toggleComplete(${list[i]["ID"]})">CHECK</button>
                      <button onclick="deleteComplete(${list[i]["ID"]})">DELETE</button>
                  </div>
              </div>`
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML
}

document.querySelector('#task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask ()
    }
});

let under_line = document.getElementById("under-line")

let menus = document.querySelectorAll(".task-tabs div")

menus.forEach((menu)=>menu.addEventListener("click", (e)=>indicator(e)))

function indicator(e){
    under_line.style.left = e.currentTarget.offsetLeft + "px";
    under_line.style.width = e.currentTarget.offsetWidth + "px";
    under_line.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}