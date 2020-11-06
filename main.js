// STATE VARIABLES
let currentProject = 0
let projectImages = [
    "images/pygg.png",
    "images/oilytics.png",
    "images/onClick.png",
    "images/tetris.png"]
let projectHTML = []

// CACHED ELEMENTS
let name = document.querySelector('#myName');
let choices = document.querySelector('#choices');
let mainHeader = document.querySelector('#mainHeader');
let mainBody = document.querySelector('#mainBody');
let leftArrow = document.getElementById('leftArrow')
let rightArrow = document.getElementById('rightArrow')
let pImg = document.getElementById('projectImage')
let desc = document.getElementById('description')



// CALLED FUNCTIONS
pageLoaded()


// EVENT LISTENERS
leftArrow.addEventListener('click', (e) => {
    if(currentProject){
        currentProject -=1
    } else {
        currentProject = 3
    }
    pImg.classList.add('fade-out')
    desc.classList.add('fade-out')
    // pImg.style.opacity = 0
    // desc.style.opacity = 0
    pImg.childNodes[1].src = projectImages[currentProject]
    console.log(pImg.childNodes[1].src)
})

// FUNCTIONS
function pageLoaded() {
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
}