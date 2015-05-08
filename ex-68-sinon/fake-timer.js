var sinon = require('sinon');

var clock = sinon.useFakeTimers();

console.log('start.');

setTimeout(function() {
  console.log('1000ms done.');
}, 1000)

clock.tick(1000);

clock.restore();
