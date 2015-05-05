var koa = require('koa');
var csrf = require('koa-csrf');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();

var app = koa();

app.use(bodyParser());

app.keys = ['session secret'];
app.use(session(app));

csrf(app);
app.use(csrf.middleware);

router.get('/form', function *() {
  // pass the csrfToken to the view
  var html =
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
      '<meta charset="UTF-8">' +
      '<title>Document</title>' +
    '</head>' +
    '<body>' +
      '<form action="/process" method="POST">' +
        '<input type="hidden" name="_csrf" value="' + this.csrf + '">' +
        'Favorite color: <input type="text" name="favoriteColor">' +
        '<button type="submit">Submit</button>' +
      '</form>' +
    '</body>' +
    '</html>';

  this.body = html;
});

router.post('/process', function *() {
  this.body = 'data is being processed';
});

app.use(router.routes());


app.listen(3000);
