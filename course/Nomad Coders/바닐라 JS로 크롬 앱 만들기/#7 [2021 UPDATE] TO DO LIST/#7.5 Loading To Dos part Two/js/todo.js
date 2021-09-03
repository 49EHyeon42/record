const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item) {
    // console.log("Hello");
    console.log("this is the turn of", item);
}

const saveToDosd = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);

if (saveToDosd !== null) {
    const parsedToDos = JSON.parse(saveToDosd);
    // console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}