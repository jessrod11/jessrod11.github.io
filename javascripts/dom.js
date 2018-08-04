const projectDom = (projectArray) => {
  let projectString = '';
  projectString += `<h1 class="center">My Projects</h1>`;
  projectString += `<div class="divider"></div>`;
  projectArray.forEach((project) => {
    projectString += `<div class="row project-styles">`;
    projectString += `<div class="col s4 z-depth-5">`;
    projectString += `<div class="card">`;
    projectString += `<div class="card-image">`;
    projectString += `<img src= "${project.imageUrl}">`;
    projectString += `</div>`;
    projectString += `<div class="card-content">`;
    projectString += `<h1 class="card-title">${project.title}</h1>`;
    projectString += `<p>${project.description}</p>`;
    projectString += ` <div class="card-action">`;
    projectString += `<a href="${project.githubUrl}" target="_blank" class="btn btn-primary" role="button">Github</a> <a href="${project.url}" class="btn btn-default" target="_blank" role="button">Project</a>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  writeToDom('#projects-container', projectString);
};

const blogDom = (blogArray) => {
  let blogString = '';
  blogString += `<h1>My Blogs</h1>`;
  blogString += `<div class="divider"></div>`;
  blogArray.forEach((blog) => {
    blogString += `<div>`;
    // blogString += `<div class="card-image waves-effect waves-block waves-light">`;
    // blogString += `</div>`;
    // blogString += `<div class="card-content">`;
    blogString += `<p>${blog.title}</p>`;
    // blogString += `<i class="material-icons right">more_vert</i>`;
    // blogString += `</span>`;
    // blogString += `</div>`;
    // blogString += `<div class="card-reveal">`;
    // blogString += `<i class="material-icons right">close</i>`;
    // blogString += `</span>`;
    blogString += `<p>${blog.post}</p>`;
    // blogString += `</div>`;
    blogString += `</div>`;
  });
  writeToDom('#blog-container', blogString);
};

const writeToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  projectDom,
  blogDom,
};
