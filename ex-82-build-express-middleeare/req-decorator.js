// req decorator

module.exports = function(opts) {
  opts = opts || {};
  opts.count = opts.count || 1;
  return function(req, res, next) {
    if (req.query.count) {
      req.query.count = (+req.query.count) + opts.count;
    } else {
      req.query.count = opts.count;
    }
    next();
  };
};
