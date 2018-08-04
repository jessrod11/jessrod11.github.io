const {setConfig,} = require('./firebaseApi');
const {getProjectsEvent, } = require('./events');

const apiKeys = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      setConfig(results);
      firebase.initializeApp(results.firebase);
      getProjectsEvent();
    })
    .catch((err) => {
      console.error('error while trying to retrieve keys', err);
    });
};

module.exports = {
  retrieveKeys,
};
