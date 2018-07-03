const {retrieveKeys,} = require('./apiKeys');
const { eventsInit, getProjectsEvent,} = require('./events');

const initializeApp = () => {
  retrieveKeys();
  eventsInit();
  getProjectsEvent();
};

initializeApp();
