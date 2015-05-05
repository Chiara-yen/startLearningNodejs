var Promise = require('bluebird');

var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var val = Math.random();
    if (val > 0.5) {
      resolve('{"value": ' + val + '}');
    } else {
      reject(new Error('fail'));
    }
  }, 5000);
})
.cancellable()
.then(function(val) {
  console.log('object: ', JSON.parse(val));
}, function(err) {
  console.log(err);
});

setTimeout(function() {
  p.cancel();
}, 2500);
