const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleTodoSubmit);