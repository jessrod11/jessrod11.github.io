const firebaseApi = require('./firebaseApi');
const dom = require ('./dom');

const printProjects = () => {
  firebaseApi.getProjects()
    .then((results) => {
      dom.projectDom(results);
    })
    .catch((error) => {
      console.log('error in getProjectPromise', error);
    });
};

// const blogPromise = () => {
//   return new Promise ((resolve, reject) => {
//     $.get('../db/blogs.json')
//       .done((data) => {
//         console.log('blogs data', data);
//         resolve(data.blogs);
//       })
//       .fail((error) => {
//         console.log(error);
//       });
//   });
// };

// const getBlogs = () => {
//   blogPromise()
//     .then((results) => {
//       dom.blogDom(results);
//     })
//     .catch((error) => {
//       console.log('error in getBlogPromise', error);
//     });
// };

module.exports = {
  printProjects,
  // getBlogs,
};
