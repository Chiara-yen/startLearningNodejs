var Promise = require('bluebird');
var del = Promise.promisify(require('del'));

var EXAMPLE_DIR = 'example/';

del(EXAMPLE_DIR + 'tim.*')
.then(function (paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});
