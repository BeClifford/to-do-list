// Selecting DOM elements
const userInput = document.querySelector(".input-box");
const addButton = document.querySelector(".add-btn");
const todo = document.querySelector(".todo-list");

// Event listener for the add button
addButton.addEventListener("click", function()  {
    const inputValue = userInput.value.trim();

    if (inputValue === "") {
        alert("Please enter a task")
    } else {
        let li = document.createElement("li");
        li.textContent = inputValue;
        li.className = "listItem";
        todo.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        span.className = "delete";
        li.appendChild(span);
    }

    userInput.value = "";
    saveData()
});


// // Event delegation for delete functionality
todo.addEventListener("click", function(e)  {
    const target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
        saveData()
    } else if (target.classList.contains("delete") || target.tagName === "SPAN") {
        target.parentElement.remove();
        saveData()
    }
}, false);

// Save list items to a local Storage
function saveData() {
    localStorage.setItem("data", todo.innerHTML);
}

function retrieveData(data) {
    todo.innerHTML = localStorage.getItem("data");
}

retrieveData()

