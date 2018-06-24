const {retrieveKeys,} = require('./apiKeys');
// const data = require ('./data');
const { eventsInit,} = require('./events');

const initializeApp = () => {
  retrieveKeys();
  eventsInit();
  // data.getBlogs();
  // data.printProjects();
};

initializeApp();
