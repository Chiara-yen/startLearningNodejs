var koa = require('koa');
var session = require('koa-session');
var app = koa();


app.keys = ['some secret hurr'];
app.use(session(app));



app.listen(3000);
