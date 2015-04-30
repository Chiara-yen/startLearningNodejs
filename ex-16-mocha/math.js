var math = module.exports = {};

math.add = function(a, b) {
  throwWhenNotNumber(a);
  throwWhenNotNumber(b);
  return a + b;
};


math.subtract = function(a, b) {
  throwWhenNotNumber(a);
  throwWhenNotNumber(b);
  return a - b;
};


math.multiply = function(a, b) {
  throwWhenNotNumber(a);
  throwWhenNotNumber(b);
  return a * b;
};


math.divide = function(a, b) {
  throwWhenNotNumber(a);
  throwWhenNotNumber(b);
  throwWhenZero(b);
  return a / b;
};


function throwWhenNotNumber(num) {
  if (typeof num !== 'number') {
    throw new TypeError(num + ' is not a number');
  }
}

function throwWhenZero(num) {
  if (num === 0) {
    throw new Error('cant not be 0');
  }
}
