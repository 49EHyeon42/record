/*
자바스크립트 이벤트 문서
HTMLHeadingElement - Web APIs | MDN


*/

// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);

/*
addEventListener를 선호하는 이유
- removeEventListener를 통해 addEventListener 제거 가능
*/

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline() {
    alert("offline");
}

function handleWindowOnline() {
    alert("online");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);