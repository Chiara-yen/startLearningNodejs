var compress = require('koa-compress');
var koa = require('koa');
var app = koa();


app.use(compress({
  filter: function (content_type) {
    return /text/i.test(content_type);
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));


app.use(function *() {
  var text = '';
  for (var i = 0; i < 10000; i++) {
    text += 'tim';
  }
  this.body = text;
});

app.listen(3000);
