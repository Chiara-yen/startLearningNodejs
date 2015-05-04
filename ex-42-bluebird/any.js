var Promise = require('bluebird');

var p1 = generatePromise();
var p2 = generatePromise();
var p3 = generatePromise();

Promise.any([ p1, p2, p3 ])
.then(function(val) {
  console.log('val: ', val);
}, function(err) {
  console.log('error: ', err);
});


function generatePromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var val = Math.random();
      if (val > 0.6) {
        resolve('{"value": ' + val + '}');
      } else {
        reject(new Error('fail'));
      }
    }, 1000 * Math.random());
  });
}

