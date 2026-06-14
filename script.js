const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

const deleteBtn = document.createElement("button");

li.textContent = taskText + " ";

deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", function () {
    li.remove();
});

li.appendChild(deleteBtn);

taskList.appendChild(li);

    taskInput.value = "";
});