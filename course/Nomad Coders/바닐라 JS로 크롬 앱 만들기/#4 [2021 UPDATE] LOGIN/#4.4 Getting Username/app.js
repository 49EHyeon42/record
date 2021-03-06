const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
    // greeting.innerText = "Hello" + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

loginButton.addEventListener("submit", onLoginSubmit);