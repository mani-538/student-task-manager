const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
checkbox.type = "checkbox";

const deleteBtn = document.createElement("button");

li.textContent = taskText + " ";

checkbox.addEventListener("change", function () {

    if (checkbox.checked) {
        li.style.textDecoration = "line-through";
    } else {
        li.style.textDecoration = "none";
    }

});

deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", function () {
    li.remove();
});

li.appendChild(deleteBtn);

taskList.appendChild(li);

    taskInput.value = "";
});