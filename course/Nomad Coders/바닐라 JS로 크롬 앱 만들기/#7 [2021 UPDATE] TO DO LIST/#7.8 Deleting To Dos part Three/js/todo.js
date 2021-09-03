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
    // console.log(li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    // console.log(li.id);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // console.log(span.innerText)
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.append(span.innerText);
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
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

function sexyFilter() {
    // 선택 옵션
}