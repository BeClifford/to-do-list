const taskInput = document.querySelector('.row input');
const addButton = document.getElementById('add-btn');
const todoBox = document.querySelector('.todo-list');

// Add event listener to the add button
addButton.addEventListener("click", addTodo);
span.addEventListener("click", deleteTask);



// Create a function to add a new todo item
function addTodo() {
    const newTask = taskInput.value.trim(); 

    if (newTask !== "") {
        let li = document.createElement("li");
        li.innerHTML = newTask;
        li.className = "list-item";
        todoBox.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Placeholder for trash can icon
        span.className = "trash-icon";
        li.appendChild(span);
    } else {
        alert("Add todo function called");
    }

    taskInput.value = "";
}

// Event delegation for deleting tasks
function deleteTask() {
    if (span.addEventListener("click")) {
        li.todoBox.removeChild(li);
    }
}
