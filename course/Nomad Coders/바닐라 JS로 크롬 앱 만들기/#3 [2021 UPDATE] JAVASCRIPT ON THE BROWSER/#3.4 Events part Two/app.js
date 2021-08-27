/*
자바스크립트 이벤트 문서
HTMLHeadingElement - Web APIs | MDN


*/

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

const title = document.querySelector("div.hello:first-child h1");

title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)