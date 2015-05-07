var r = require('rethinkdb');

var CONFIG = { host: 'localhost', port: 28015 }

var _conn;

r.connect(CONFIG)
.then(
  function(conn) {
    _conn = conn;
    return r.db('test').tableCreate('tv_shows').run(_conn);
  },
  throwError
)
.then(
  function(res) {
    console.log(res);
    return r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(_conn);
  },
  throwError
)
.then(console.log, throwError);

function throwError(err) { throw err; }
