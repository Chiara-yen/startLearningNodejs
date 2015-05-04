var koa = require('koa');
var app = koa();
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);

app.experimental = true;

// file is a Buffer
app.use(async function() {
  var file = await readFile(__dirname + '/hello.txt');
  this.body = file.toString();
});

app.listen(3000);
