require('chai').should();
var math = require('../math');

describe('add', function () {
  it('should throw when first argument not number', function() {
    try {
      math.add('a', 1);
    } catch (e) {
      e.message.should.be.equal('a is not a number');
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.add(1, 'b');
    } catch (e) {
      e.message.should.be.equal('b is not a number');
    }
  });

  it('should work with positive', function() {
    var result = math.add(1, 2);
    result.should.be.equal(3);
  });

  it('should work with 0', function() {
    var result = math.add(0, 0);
    result.should.be.equal(0);
  });

  it('should work with negative', function() {
    var result = math.add(-1, -2);
    result.should.be.equal(-3);
  });
});


describe('subtract', function () {
  it('should throw when first argument not number', function() {
    try {
      math.subtract('a', 1);
    } catch (e) {
      e.message.should.be.equal('a is not a number');
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.subtract(1, 'b');
    } catch (e) {
      e.message.should.be.equal('b is not a number');
    }
  });

  it('should work with positive', function() {
    var result = math.subtract(5, 2);
    result.should.be.equal(3);
  });

  it('should work with 0', function() {
    var result = math.subtract(0, 0);
    result.should.be.equal(0);
  });

  it('should work with negative', function() {
    var result = math.subtract(-1, -2);
    result.should.be.equal(1);
  });
});

describe('multiply', function () {
  it('should throw when first argument not number', function() {
    try {
      math.multiply('a', 1);
    } catch (e) {
      e.message.should.be.equal('a is not a number');
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.multiply(1, 'b');
    } catch (e) {
      e.message.should.be.equal('b is not a number');
    }
  });

  it('should work with positive', function() {
    var result = math.multiply(5, 2);
    result.should.be.equal(10);
  });

  it('should work with 0', function() {
    var result = math.multiply(5, 0);
    result.should.be.equal(0);
  });

  it('should work with negative', function() {
    var result = math.multiply(-1, -2);
    result.should.be.equal(2);
  });
});

describe('divide', function () {
  it('should throw when first argument not number', function() {
    try {
      math.divide('a', 1);
    } catch (e) {
      e.message.should.be.equal('a is not a number');
    }
  });

  it('should throw when second argument not number', function() {
    try {
      math.divide(1, 'b');
    } catch (e) {
      e.message.should.be.equal('b is not a number');
    }
  });

  it('should throw when divide by 0', function() {
    try {
      math.divide(5, 0);
    } catch (e) {
      e.message.should.be.equal('cant not be 0');
    }
  });

  it('should work with positive', function() {
    var result = math.divide(5, 2);
    result.should.be.equal(5/2);
  });

  it('should work with negative', function() {
    var result = math.divide(-1, -2);
    result.should.be.equal(1/2);
  });
});
