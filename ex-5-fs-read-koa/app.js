var koa = require('koa');
var app = koa();
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


// file is a Buffer
app.use(function *() {
  var file = yield readFile(__dirname + '/hello.txt');
  this.body = file.toString();
});

app.listen(3000);
