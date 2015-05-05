var Promise = require('bluebird');

var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var val = Math.random();
    if (val > 0.5) {
      resolve('{"value": ' + val + '}');
    } else {
      reject(new Error('fail'));
    }
  }, 1000);
})
.then(function(val) {
  console.log('object: ', JSON.parse(val));
}, function(err) {
  console.log(err);
})
.catch(SyntaxError, function(err) {
  console.log('SyntaxError catch', err);
})
.catch(function(err) {
  console.log('final catch', err);
});
