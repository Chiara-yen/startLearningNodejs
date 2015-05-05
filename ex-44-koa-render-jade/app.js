var views = require('koa-views');
var koa = require('koa');
var app = koa();

app.use(views('./views', { default: 'jade' }));

app.use(function *() {
  yield this.render('index', {
    title: this.query.title || 'Default Title',
    content: this.query.content || 'Default Content'
  });
});

app.listen(3000);
