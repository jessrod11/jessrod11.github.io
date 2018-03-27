console.log('Stix');

var projects = [
    {
        id: "project1",
        title: "Project 1",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    },
    {
        id: "project2",
        title: "Project 2",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    },
    {
        id: "project3",
        title: "Project 3",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    },
    {
        id: "project4",
        title: "Project 4",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    },
    {
        id: "project5",
        title: "Project 5",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    },
    {
        id: "project6",
        title: "Project 6",
        imageUrl: "http://placeimg.com/250/125/tech",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        githubUrl: "https://github.com/jessrod11/jessrod11.github.io"
    }
];



function createCards(projectArray){
    for(var i=0; i< projectArray.length; i++){
        var projectString = '';
            projectString += '<div class="project-styles">';
            projectString += '<h2>'+ projectArray[i].title + '</h2>';
            projectString += '<img src= "'+ projectArray[i].imageUrl + '">';
            projectString += '<p>'+ projectArray[i].description + '</p>';
            projectString += `<a href= "${projectArray[i].githubUrl}">` + projectArray[i].githubUrl + `</a>`;
            projectString += '</div>';
        writeToDom(projectString, 'my-projects');
    }
};

function writeToDom(stringToPrint, divId){
    var projectDiv = document.getElementById(divId);
    projectDiv.innerHTML += stringToPrint;
};

createCards(projects); 