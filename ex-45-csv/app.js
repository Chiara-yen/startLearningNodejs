var csv = require('csv');
var Promise = require('bluebird');
var generate = Promise.promisify(csv.generate);
var parse = Promise.promisify(csv.parse);
var stringify = Promise.promisify(csv.stringify);


generate({ seed: 1, columns: 4, length: 5 })
.then(function(data) {
  console.log('generate:\n', data);
  return parse(data);
})
.then(function(data) {
  console.log('parse:\n', data);
  return stringify(data);
})
.then(function(data) {
  console.log('stringify:\n', data);
});
