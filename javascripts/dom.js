const projectDom = (projectArray) => {
  let projectString = '';
  projectArray.forEach((project) => {
    projectString += `<div>`;
    projectString += `<h1 class="title">${project.title}<h1>`;
    projectString += `<img src= "${project.imageUrl}">`;
    projectString += `<p>${project.description}</p>`;
    projectString += `<a href="${project.githubUrl}">Link to Github Profile</a>`;
    projectString += `</div>`;
  });
  writeToDom('#projects-container', projectString);
};

const blogDom = (blogArray) => {
  let blogString = '';
  blogArray.forEach((blog) => {
    blogString += `<div class="blog-styles">`;
    blogString += `<h2>${blog.title}</h2>`;
    blogString += `<h2>${blog.date}</h2>`;
    blogString += `<p>${blog.post}</p>`;
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
