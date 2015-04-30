var koa = require('koa');
var app = koa();


app.use(function *(next) {
  this.body = ' 1!';
  yield next;
  this.body += ' 5!';
});

app.use(function *(next) {
  this.body += ' 2!';
  try {
    yield next;
  } catch (e) {
    this.body += ' 4!';
  }

});

app.use(function *() {
  throw new Error('boooom');
  this.body += ' 3!';
});


app.listen(3000);
