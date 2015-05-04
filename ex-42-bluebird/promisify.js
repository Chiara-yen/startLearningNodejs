var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);

readFile('promisify.js')
.then(function(buf) {
  console.log(buf);
});
