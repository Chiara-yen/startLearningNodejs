var Promise = require('bluebird');

var p1 = generatePromise();
var p2 = generatePromise();
var p3 = generatePromise();

Promise.all([ p1, p2, p3 ])
.spread(function(val1, val2, val3) {
  console.log('val1: ', val1);
  console.log('val2: ', val2);
  console.log('val3: ', val3);
}, function(err) {
  console.log('error: ', err);
});


function generatePromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var val = Math.random();
      if (val > 0.5) {
        resolve('{"value": ' + val + '}');
      } else {
        reject(new Error('fail'));
      }
    }, 1000 * Math.random());
  });
}
