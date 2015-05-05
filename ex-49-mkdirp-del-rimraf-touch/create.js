var Promise = require('bluebird');
var touch = Promise.promisify(require('touch'));

var EXAMPLE_DIR = 'example/';

touch(EXAMPLE_DIR + 'tim.js')
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.php');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.css');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.java');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.min.css');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.min.js');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.rb');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.styl');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.py');
})
.then(function() {
  return touch(EXAMPLE_DIR + 'tim.go');
})
.then(function() {
  console.log('success');
});
