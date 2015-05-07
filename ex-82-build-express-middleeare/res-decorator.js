// res decorator

module.exports = function(opts) {
  opts = opts || {};
  opts.name = opts.name || 'Tim';
  return function(req, res, next) {
    var _send = res.send.bind(res);
    res.send = function(text) {
      _send(text + ' ' + opts.name);
    };
    next();
  };
};
