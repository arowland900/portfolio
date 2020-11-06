//VARIABLES
let currentProject = 0
let projectImages = [
    "images/oilytics.png",
    "images/pygg.png",
    "images/onClick.png",
    "images/tetris.png"]
let projectHTML = [
    `
    <h1 class='projTitle'>Oilytics – Software Engineer</h1>             
    <p style="font-size: 20px; text-align: justify; display: inline-block;">
        - Oilytics is an analytics and charting platform built to provide insight into oil market trends. 
        As a Software Engineer on the Oilytics team, I worked closely with the lead developer to 
        build features from start to finish.  My focus was directed primarily toward writing front-end 
        code, utilizing React & Redux.                 
    </p>
    <p style="font-size: 20px;">
        - <strong>Technology:</strong> React + Flask + PostgreSQL            
    </p>
    <p style="font-size: 20px;">- <strong> Link: </strong><a class="appLink"  href="https://www.oilytics.co/">oilytics.co</a></p>
`,
    `
    <h1 class='projTitle'>Pygg – Project Manager</h1>             
    <p style="font-size: 20px; text-align: justify; display: inline-block;">
        - As a Lead Instructor of General Assembly's 
        <i>Software Engineering Immersive</i> course, 
        I oversee the production of all student projects
        from start to finish.
        <i>Pygg</i>, a budget tracking web application, was built 
        by two of my former students in the Spring of 2020.                  
    </p>
    <p style="font-size: 20px;">
        - <strong>Technology:</strong> Django + PostgreSQL            
    </p>
    <p style="font-size: 20px;">- <strong> Link: </strong><a class="appLink"  href="http://pygg-app.herokuapp.com/">pygg-app.herokuapp.com</a></p>
`,
    `
    <h1 class='projTitle'>OnClick Health – Consultant</h1>             
    <p style="font-size: 20px; text-align: justify; display: inline-block;">
        - OnClick Health is a post-discharge patient management system.  
        As a technical consultant, I oversaw the development of the public facing 
        website, and guided the direction of initial technical choices within the company, 
        ranging from database infrastructure to API implementation & data security.                 
    </p>
    <p style="font-size: 20px;">
        - <strong>Technology:</strong> GoDaddy Website Builder + MongoDB           
    </p>
    <p style="font-size: 20px;">- <strong> Link: </strong><a class="appLink"  href="https://onclickhealth.com/">onclickhealth.com</a></p>
`,
    `
    <h1 class='projTitle'>Tetris – Project Manager</h1>             
    <p style="font-size: 20px; text-align: justify; display: inline-block;">
        - As a Lead Instructor of General Assembly's 
        <i>Software Engineering Immersive</i> course, 
        I oversee the production of all student projects
        from start to finish.
        This <i>Tetris</i> clone was built 
        by one of my former students in the Summer of 2020.                  
    </p>
    <p style="font-size: 20px;">
        - <strong>Technology:</strong> HTML + CSS + JavaScript            
    </p>
    <p style="font-size: 20px;">- <strong> Link: </strong><a class="appLink"  href="https://irritas.github.io/tetris/">irritas.github.io/tetris</a></p>
`
]

// CACHED ELEMENTS
let name = document.querySelector('#myName');
let choices = document.querySelector('#choices');
let mainHeader = document.querySelector('#mainHeader');
let mainBody = document.querySelector('#mainBody');
let pImg = document.getElementById('projectImage')
let desc = document.getElementById('description')
let footer = document.querySelector('#footer')



// CALLED FUNCTIONS
pageLoaded()


// EVENT LISTENERS
footer.addEventListener('click', (e) => {
    if (e.target.id == 'leftArrow') {
        currentProject
            ? currentProject -= 1
            : currentProject = 3
    }
    if (e.target.id == 'rightArrow') {
        currentProject == 3
            ? currentProject = 0
            : currentProject += 1
    }
    pImg.childNodes[1].src = projectImages[currentProject]
    desc.innerHTML = projectHTML[currentProject]
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

    // fade in footer
    setTimeout(() => {
        footer.classList.add("fade-in")

        setTimeout(() => {
            footer.style.opacity = 1
        }, 2500);

    }, 2000);
}