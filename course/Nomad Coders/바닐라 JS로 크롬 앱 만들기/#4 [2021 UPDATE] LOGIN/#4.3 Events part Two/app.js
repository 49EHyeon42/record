const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit() {
    // tomato.preventDefault(); 새로고침 X
    // console.log(tomato);
    
    const username = loginInput.value;
    console.log(username);
}

function handleLinkClick() {
    event.preventDefault();
    console.log(event);
    alert("clicked");
}

loginButton.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);