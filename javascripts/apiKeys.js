// // const firebaseApi = require('./firebaseApi');

// const apiKeys = () => {
//   return new Promise ((resolve, reject) => {
//     $.ajax('./db/apiKeys.json')
//       .done((data) => {
//         resolve(data.apiKeys.firebase);
//         console.log(data.apiKeys.firebase);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

// const retrieveKeys = () => {
//   apiKeys()
//     .then((results) => {
//       firebase.intializeApp(results.apiKey);
//     })
//     .catch((err) => {
//       console.error('error while trying to retrieve keys', err);
//     });
// };

// module.exports = {
//   retrieveKeys,
// };
