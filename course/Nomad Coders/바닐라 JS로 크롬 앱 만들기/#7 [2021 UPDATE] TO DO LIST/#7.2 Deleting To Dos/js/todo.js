const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteToDo(event) {
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.append(span);
    li.appendChild(button);
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