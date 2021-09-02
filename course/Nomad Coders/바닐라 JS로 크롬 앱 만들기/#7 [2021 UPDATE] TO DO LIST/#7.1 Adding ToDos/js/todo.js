const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.append(span);
    span.innerText = newTodo;
    // console.log(li);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);