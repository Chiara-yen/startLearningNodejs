var koa = require('koa');
var session = require('koa-session');
var router = require('koa-router')();
var app = koa();


app.keys = [ 'some secret hurr' ];
app.use(session(app));

router.get('/', function *() {
  var sess = this.session;
  if (sess && sess.username) {
    this.body = 'Hello ' + sess.username;
  } else {
    this.body = 'Please login';
  }
});

router.get('/login', function *() {
  this.session.username = this.query.username;
  this.redirect('/');
});

router.get('/logout', function *() {
  this.session = null;
  this.redirect('/');
});

app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});

app.use(router.routes());

app.listen(3000);
