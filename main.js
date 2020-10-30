let name = document.querySelector('#myName');
let choices = document.querySelector('#choices');
let mainHeader = document.querySelector('#mainHeader');

name.classList.add("fade-in")
choices.classList.add("fade-in")

setTimeout(() => {
    name.style.opacity = 1
    choices.style.opacity = 1
 
}, 2000);
setTimeout(() => {
    mainHeader.classList.add("fade-in")
    setTimeout(() => {
        mainHeader.style.opacity = 1
    }, 2000);
}, 1000);