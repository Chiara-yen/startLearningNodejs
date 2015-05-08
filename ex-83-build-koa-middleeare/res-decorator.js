// res decorator

module.exports = function(opts) {
  opts = opts || {};
  opts.name = opts.name || 'Tim';
  return function *(next) {
    yield next;
    this.body = this.body + ' ' + opts.name;
  };
};
