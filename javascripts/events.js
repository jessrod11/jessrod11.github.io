const { getProjects, getBlogs,} = require('./firebaseApi');
const { projectDom, blogDom,} = require('./dom');

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
});

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'bioLink') {
      $('#bio-container').removeClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'projectsLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').removeClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'blogLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').removeClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'techLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').removeClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'contactLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').removeClass('hide');
    } else if (e.target.id === 'resumeLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').removeClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'homeLink') {
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    };
  });
};

const getProjectsEvent = () => {
  $(document).on('click', '#projectsLink', (e) => {
    getProjects()
      .then((projectsArray) => {
        projectDom(projectsArray);
      })
      .catch((error) => {
        console.log('error in getProjectPromise', error);
      });
  });
};

const getBlogsEvent = () => {
  $(document).on('click', '#blogLink', (e) => {
    getBlogs()
      .then((blogsArray) => {
        blogDom(blogsArray);
      })
      .catch((error) => {
        console.log('error in getBlogsPromise', error);
      });
  });
};

const eventsInit = () => {
  myLinks();
  getProjectsEvent();
  getBlogsEvent();
};

module.exports = {
  eventsInit,
};
