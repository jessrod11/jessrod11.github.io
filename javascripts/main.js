const {retrieveKeys,} = require('./apiKeys');
const { eventsInit, } = require('./events');
const { getProjectsEvent, getBlogsEvent,} = require('./firebaseApi');

const initializeApp = () => {
  retrieveKeys();
  eventsInit();
  getProjectsEvent();
  getBlogsEvent();
};

initializeApp();
