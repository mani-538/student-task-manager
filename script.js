const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");

function saveTasks() {

    const tasks = [];

    const taskItems = taskList.children;

    for (let task of taskItems) {

        tasks.push({
            text: task.childNodes[0].textContent.trim(),
            completed: task.dataset.completed === "true"
        });

    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(taskText, completed = false) {
    const li = document.createElement("li");

    li.dataset.completed = "false";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";

checkbox.checked = completed;

const deleteBtn = document.createElement("button");

li.textContent = taskText + " ";

checkbox.addEventListener("change", function () {

    if (checkbox.checked) {
        li.style.textDecoration = "line-through";
    } else {
        li.style.textDecoration = "none";
    }

    li.dataset.completed = completed;

    if (completed) {
    li.style.textDecoration = "line-through";
}

    saveTasks();

});

deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", function () {

    li.remove();

    saveTasks();

});

li.appendChild(checkbox);
li.appendChild(deleteBtn);

taskList.appendChild(li);

}

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    createTask(taskText);

saveTasks();

    taskInput.value = "";
});

allBtn.addEventListener("click", function () {

    const tasks = taskList.children;

    for (let task of tasks) {
        task.style.display = "block";
    }

});

activeBtn.addEventListener("click", function () {

    const tasks = taskList.children;

    for (let task of tasks) {

        if (task.dataset.completed === "true") {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }

    }

});

completedBtn.addEventListener("click", function () {

    const tasks = taskList.children;

    for (let task of tasks) {

        if (task.dataset.completed === "true") {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }

    }

});

const savedTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

for (let task of savedTasks) {

    createTask(
        task.text,
        task.completed
    );

}