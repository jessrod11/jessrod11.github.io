const writeToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};

const createBlogPosts = (blogArray) => {
    for (let i = 0; i < blogArray.length; i++) {
        let blogString = '';
        blogString += '<div class="blog-styles">';
        blogString += '<h2>' + blogArray[i].title + '</h2>';
        blogString += '<h2>' + blogArray[i].date + '</h2>';
        blogString += '<p>' + blogArray[i].post + '</p>';
        blogString += '</div>';
        writeToDom(blogString, 'blog-container');
    }
};

function executeIfCodeFails() {
    console.log('What happened, Stix?!');
}

function executeWhenPageLoads() {
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}


const startBlogPage = () =>{
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeWhenPageLoads);
    myRequest.addEventListener('error', executeIfCodeFails);
    myRequest.open('GET', "../db/blogs.json");
    myRequest.send();
}

startBlogPage();