/*
    getElementById, getElementsByClassName, 
    getElementsByTagName, < querySelector

    Events

*/

const title = document.querySelector("div.hello:first-chird h1");

function handleTitleClick() {
    // console.log("title was clicked!");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);