var koa = require('koa');
var app = koa();


app.use(require('./req-decorator')({ count: 5 }));
app.use(require('./res-decorator')({ name: 'Roth' }));


app.use(function *() {
  this.body = 'count: ' + this.count;
});


app.listen(3000);
