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
let pImg = document.getElementById('projectImage')
let desc = document.getElementById('description')
let footer = document.querySelector('footer')



// CALLED FUNCTIONS
pageLoaded()


// EVENT LISTENERS
footer.addEventListener('click', (e) => {
    if(e.target.id == 'leftArrow'){
        currentProject 
            ? currentProject -=1
            : currentProject = 3 
    }
    if(e.target.id == 'rightArrow') {
        currentProject == 3
            ? currentProject = 0
            : currentProject += 1
    }
    pImg.childNodes[1].src = projectImages[currentProject]
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