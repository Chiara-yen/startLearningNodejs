var fs = require('fs');

exports = module.exports = {};

exports.writeFile = function() {
  fs.writeFile.apply(fs, [].slice.apply(arguments));
};
