
const writeToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};

const createCards = (projectArray) => {
    for(let i=0; i< projectArray.length; i++){
        let projectString = '';
            projectString += '<div class="project-styles">';
            projectString += '<h2>'+ projectArray[i].title + '</h2>';
            projectString += '<img src= "'+ projectArray[i].imageUrl + '">';
            projectString += '<p>'+ projectArray[i].description + '</p>';
            projectString += `<a href= "${projectArray[i].githubUrl}">` + projectArray[i].githubUrl + `</a>`;
            projectString += '</div>';
        writeToDom(projectString, 'my-projects');
    }
};

function executeIfCodeFails() {
    console.log('What happened, Stix?!');
}

function executeWhenPageLoads() {
    const data = JSON.parse(this.responseText);
    createCards(data.projects);
}

startProjectPage = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeWhenPageLoads);
    myRequest.addEventListener('error', executeIfCodeFails);
    myRequest.open('GET', '../db/projects.json');
    myRequest.send();
}

startProjectPage();