exports = module.exports = {};

exports.run = function() {
  var rand = Math.random();
  if (rand > 0.5) {
    throw new Error('ERROR!!!');
  } else {
    return rand;
  }
};
