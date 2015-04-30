var koa = require('koa');
var app = koa();


app.use(function *() {
  this.body = this.request.query;
});

app.listen(3000);
