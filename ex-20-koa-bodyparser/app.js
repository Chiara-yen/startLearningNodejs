var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var app = koa();

app.use(bodyParser());

app.use(function *() {
  this.body = this.request.body;
});

app.listen(3000);
