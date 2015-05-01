var koa = require('koa');
var mount = require('koa-mount');
var router = require('koa-router');
var accounts = router();
var apis = router();
var docs = router();
var app = koa();


accounts.get('/', function *() {
  this.body = 'Accounts';
});

apis.get('/', function *() {
  this.body = 'Apis';
});

docs.get('/', function *() {
  this.body = 'Docs';
});

app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});

app.use(mount('/accounts', accounts.routes()))
   .use(mount('/apis', apis.routes()))
   .use(mount('/docs', docs.routes()));


app.listen(3000);
