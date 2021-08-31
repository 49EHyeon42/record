const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit() {
    // tomato.preventDefault(); 새로고침 X
    // console.log(tomato);
    
    const username = loginInput.value;
    console.log(username)
}

loginButton.addEventListener("submit", onLoginSubmit);