var koa = require('koa');
var router = require('koa-router')();
var app = koa();



router.get('/', function *() {
  this.body = 'Home';
});

router.get('/tim', function *() {
  this.body = 'Tim';
});

router.get('/roth', function *() {
  this.body = 'Roth';
});

app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});

app.use(router.routes());


app.listen(3000);
