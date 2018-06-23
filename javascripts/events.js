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
      console.log('projects');
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').removeClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'blogLink') {
      console.log('blogs');
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').removeClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'techLink') {
      console.log('skills');
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').removeClass('hide');
      $('#contact-container').addClass('hide');
    } else if (e.target.id === 'contactLink') {
      console.log('contact');
      $('#bio-container').addClass('hide');
      $('#resume-container').addClass('hide');
      $('#projects-container').addClass('hide');
      $('#blog-container').addClass('hide');
      $('#skills-container').addClass('hide');
      $('#contact-container').removeClass('hide');
    } else if (e.target.id === 'resumeLink') {
      console.log('resume');
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

module.exports = {
  myLinks,
};
