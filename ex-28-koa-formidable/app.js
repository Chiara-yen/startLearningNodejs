var koa = require('koa');
var Promise = require('bluebird');
var formidable = require('formidable');
var app = koa();



app.use(function *() {
  var form = new formidable.IncomingForm();
  form.uploadDir = 'upload';
  form.keepExtensions = true;
  var parse = Promise.promisify(form.parse, form);
  var uploaded = yield parse(this.req);
  console.log(uploaded);
  this.body = uploaded;
});


app.listen(3000);
