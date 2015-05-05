var Promise = require('bluebird');
var mkdirp = Promise.promisify(require('mkdirp'));

var EXAMPLE_DIR = 'example/';

mkdirp(EXAMPLE_DIR + 'tmp/foo/bar/baz')
.then(function () {
  console.log('success');
});
