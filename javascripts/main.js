const {retrieveKeys,} = require('./apiKeys');
const { eventsInit, getProjectsEvent,} = require('./events');
const {printProjects,} = require('./firebaseApi');

const initializeApp = () => {
  retrieveKeys();
  printProjects();
  eventsInit();
  getProjectsEvent();
};

initializeApp();
