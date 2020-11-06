let name = document.querySelector('#myName');
let choices = document.querySelector('#choices');
let mainHeader = document.querySelector('#mainHeader');
let mainBody = document.querySelector('#mainBody');

name.classList.add("fade-in")
choices.classList.add("fade-in")

// fade in nav
setTimeout(() => {
    name.style.opacity = 1
    choices.style.opacity = 1
 
}, 2000);

// fade in main header
setTimeout(() => {
    mainHeader.classList.add("fade-in")
    
    setTimeout(() => {
        mainHeader.style.opacity = 1
    }, 2000);
}, 1000);

// fade in body
setTimeout(() => {
    mainBody.classList.add("fade-in")
    
    setTimeout(() => {
        mainBody.style.opacity = 1
    }, 2000);
    
}, 1500);

