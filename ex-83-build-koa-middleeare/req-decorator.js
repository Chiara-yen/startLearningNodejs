// req decorator

module.exports = function(opts) {
  opts = opts || {};
  opts.count = opts.count || 1;
  return function *(next) {
    if (this.query.count) {
      this.count = (+this.query.count) + opts.count;
    } else {
      this.count = opts.count;
    }
    yield next;
  };
};
