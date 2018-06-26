const projectDom = (projectArray) => {
  let projectString = '';
  projectArray.forEach((project) => {
    projectString += `<div class="col-md-4" text-center">`;
    projectString += `<div class="thumbnail">`;
    projectString += `<img src= "${project.imageUrl}">`;
    projectString += `<div class="caption">`;
    projectString += `<h3 class="title text-center">${project.title}<h3>`;
    projectString += `<p>${project.description}</p>`;
    projectString += `<p class="text-center"><a href="${project.githubUrl}" target="_blank" class="btn btn-primary" role="button">Github</a> <a href="${project.url}" class="btn btn-default" target="_blank" role="button">Project</a></p>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  writeToDom('#projects-container', projectString);
};

const blogDom = (blogArray) => {
  let blogString = '';
  blogArray.forEach((blog) => {
    blogString += `<div class="col-sm-6 col-md-4 shorten-text">`;
    blogString += `<div class="thumbnail">`;
    blogString += `<h2 class="text-center">${blog.date}</h2>`;
    blogString += `<div class="caption">`;
    blogString += `<h2>${blog.title}</h2>`;
    blogString += `<p>${blog.post}</p>`;
    blogString += `</div>`;
    blogString += `</div>`;
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
