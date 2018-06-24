let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getProjects = () => {
  return new Promise ((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.firebase.databaseURL}/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getProjects,
};
