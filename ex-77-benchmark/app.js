var Benchmark = require('benchmark');
var lodash = require('lodash');
var underscore = require('underscore');
var suite = new Benchmark.Suite;

var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// add tests
suite
.add('for', function() {
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i];
  }
})
.add('Array#forEach', function() {
  arr.forEach(function(el) {
    el
  });
})
.add('underscore#each', function() {
  underscore.each(arr, function(el) {
    el
  });
})
.add('lodash#each', function() {
  lodash.each(arr, function(el) {
    el
  });
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });
