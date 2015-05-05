var Promise = require('bluebird');
var rimraf = Promise.promisify(require('rimraf'));

var EXAMPLE_DIR = 'example/';

rimraf(EXAMPLE_DIR + 'tmp')
.then(function () {
  console.log('success');
});
