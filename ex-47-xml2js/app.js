var Promise = require('bluebird');
var parseString = Promise.promisify(require('xml2js').parseString);
var readFile = Promise.promisify(require('fs').readFile);

var FILE_PATH = './sample.xml';

readFile(FILE_PATH)
.then(function(buf) {
  var xml = buf.toString();
  return parseString(xml);
})
.then(function(result) {
    console.log(result);
});
