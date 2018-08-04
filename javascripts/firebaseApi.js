const { projectDom, blogDom, } = require('./dom');
let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getProjects = () => {
  return new Promise ((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.firebase.databaseURL}/projects/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getBlogs = () => {
  return new Promise ((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.firebase.databaseURL}/blogs/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getProjectsEvent = () => {
  getProjects()
    .then((projectsArray) => {
      projectDom(projectsArray);
    })
    .catch((error) => {
      console.log('error in getProjectPromise', error);
    });
};

const getBlogsEvent = () => {
  getBlogs()
    .then((blogsArray) => {
      blogDom(blogsArray);
    })
    .catch((error) => {
      console.log('error in getBlogsPromise', error);
    });
};

module.exports = {
  setConfig,
  getProjectsEvent,
  getBlogsEvent,
};
