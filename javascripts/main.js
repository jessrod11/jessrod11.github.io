const {retrieveKeys,} = require('./apiKeys');
const { eventsInit,} = require('./events');

const initializeApp = () => {
  retrieveKeys();
  eventsInit();
};

initializeApp();
