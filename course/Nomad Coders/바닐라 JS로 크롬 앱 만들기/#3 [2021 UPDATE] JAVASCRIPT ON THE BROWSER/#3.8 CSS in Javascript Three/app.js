const h1 = document.querySelector("div.hello:first-child h1");

function handleMouseEnter() {
    const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass)
    // } else {
    //     h1.classList.add(clickedClass)
    // }
    h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleMouseEnter)