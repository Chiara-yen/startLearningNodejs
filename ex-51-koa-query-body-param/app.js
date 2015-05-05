var koa = require('koa');
var router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
var app = koa();

app.use(bodyParser());

router.post('/users/:id', function *() {
  var queryUserId = this.request.query.user_id;
  var bodyUserId = this.request.body.user_id;
  var paramUserId = this.params.id;
  this.body = {
    queryUserId: queryUserId,
    bodyUserId: bodyUserId,
    paramUserId: paramUserId
  };
});

app.use(router.routes());


app.listen(3000);
