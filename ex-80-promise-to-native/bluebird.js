var Promise = require('native-or-bluebird');

new Promise(function(resolve, reject) {
  if (Math.random() > 0.5) {
    resolve('success');
  } else {
    reject(new Error('failed'));
  }
})
.then(
  function(msg) {
    console.log(msg);
  },
  function(err) {
    console.log(err.message);
  }
);
