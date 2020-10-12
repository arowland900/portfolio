let name = document.querySelector('#myName')

name.classList.add("fade-in")

setTimeout(() => {
    name.style.opacity = 1
}, 2000);