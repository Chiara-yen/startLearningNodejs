var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var app = koa();

app.use(bodyParser());

router.get('/', function *() {
  this.body = this.request.query;
});

router.post('/', function *() {
  this.body = this.request.body;
});


app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});

app.use(router.routes());

module.exports = app;
