
function addTask(){
 let input = document.getElementById("taskInput");
 let task = input.value;

 if (task === ""){
  alert("Enter your a task.");
  return;
 }

 let li = document.createElement("li");
 let taskList = document.createElement("span")
 taskList.innerText = task;

 let deleteButton = document.createElement("button");

 deleteButton.innerText = "❌";
 li.appendChild(taskList);
 li.appendChild(deleteButton);

 deleteButton.onclick = function(){
  li.remove();
 }
 let list = document.getElementById("taskList");
 list.appendChild(li);

 input.value = "";
}