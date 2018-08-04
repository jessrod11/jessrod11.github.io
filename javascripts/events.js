// const { getProjects, getBlogs,} = require('./firebaseApi');
// const { projectDom, blogDom,} = require('./dom');

const materalizeInit = () => {
  $(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
    });

  });
};

// const getProjectsEvent = () => {
//   $(document).on('click', '#projectsLink', (e) => {
//     getProjects()
//       .then((projectsArray) => {
//         projectDom(projectsArray);
//       })
//       .catch((error) => {
//         console.log('error in getProjectPromise', error);
//       });
//   });
// };

// const getBlogsEvent = () => {
//   $(document).on('click', '#blogLink', (e) => {
//     getBlogs()
//       .then((blogsArray) => {
//         blogDom(blogsArray);
//       })
//       .catch((error) => {
//         console.log('error in getBlogsPromise', error);
//       });
//   });
// };

const eventsInit = () => {
  materalizeInit();
  // getProjectsEvent();
  // getBlogsEvent();
};

module.exports = {
  eventsInit,
};
