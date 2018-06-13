const dom = require ('./dom');

const projectPromise = () => {
  return new Promise ((resolve, reject) => {
    $.get ('../db/projects.json')
      .done((data) => {
        console.log('projects data', data);
        resolve(data.projects);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getProjects = () => {
  projectPromise()
    .then((results) => {
      dom.projectDom(results);
    })
    .catch((error) => {
      console.log('error in getProjectPromise', error);
    });
};

const blogPromise = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/blogs.json')
      .done((data) => {
        console.log('blogs data', data);
        resolve(data.blogs);
      })
      .fail((error) => {
        console.log(error);
      });
  });
};

const getBlogs = () => {
  blogPromise()
    .then((results) => {
      dom.blogDom(results);
    })
    .catch((error) => {
      console.log('error in getBlogPromise', error);
    });
};

module.exports = {
  getProjects,
  getBlogs,
};
