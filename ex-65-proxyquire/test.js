var proxyquire =  require('proxyquire');
var assert = require('assert');
var stub = {};

stub.showYourAnswer = function() { return 0.5; };

var a = proxyquire('./a', { './b': stub });


assert.equal(a(), 0.5);
assert.equal(a(1), 0.5);
assert.equal(a('try your best'), 0.5);
