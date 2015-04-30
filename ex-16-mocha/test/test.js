var assert = require('assert');
var math = require('../math');

describe('add', function () {
  it('should throw when first argument not number', function() {
    try {
      math.add('a', 1);
    } catch (e) {
      assert('a is not a number' === e.message);
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.add(1, 'b');
    } catch (e) {
      assert('b is not a number' === e.message);
    }
  });

  it('should work with positive', function() {
    var result = math.add(1, 2);
    assert(3 === result);
  });

  it('should work with 0', function() {
    var result = math.add(0, 0);
    assert(0 === result);
  });

  it('should work with negative', function() {
    var result = math.add(-1, -2);
    assert(-3 === result);
  });
});


describe('subtract', function () {
  it('should throw when first argument not number', function() {
    try {
      math.subtract('a', 1);
    } catch (e) {
      assert('a is not a number' === e.message);
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.subtract(1, 'b');
    } catch (e) {
      assert('b is not a number' === e.message);
    }
  });

  it('should work with positive', function() {
    var result = math.subtract(5, 2);
    assert(3 === result);
  });

  it('should work with 0', function() {
    var result = math.subtract(0, 0);
    assert(0 === result);
  });

  it('should work with negative', function() {
    var result = math.subtract(-1, -2);
    assert(1 === result);
  });
});

describe('multiply', function () {
  it('should throw when first argument not number', function() {
    try {
      math.multiply('a', 1);
    } catch (e) {
      assert('a is not a number' === e.message);
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.multiply(1, 'b');
    } catch (e) {
      assert('b is not a number' === e.message);
    }
  });

  it('should work with positive', function() {
    var result = math.multiply(5, 2);
    assert(10 === result);
  });

  it('should work with 0', function() {
    var result = math.multiply(5, 0);
    assert(0 === result);
  });

  it('should work with negative', function() {
    var result = math.multiply(-1, -2);
    assert(2 === result);
  });
});

describe('divide', function () {
  it('should throw when first argument not number', function() {
    try {
      math.divide('a', 1);
    } catch (e) {
      assert('a is not a number' === e.message);
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.divide(1, 'b');
    } catch (e) {
      assert('b is not a number' === e.message);
    }
  });

  it('should throw when divide by 0', function() {
    try {
      math.divide(5, 0);
    } catch (e) {
      assert('cant not be 0' === e.message);
    }
  });

  it('should work with positive', function() {
    var result = math.divide(5, 2);
    assert(5/2 === result);
  });

  it('should work with negative', function() {
    var result = math.divide(-1, -2);
    assert(1/2 === result);
  });
});
