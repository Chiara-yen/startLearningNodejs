var app = require('koa')();
var router = require('koa-router')();
var fs = require('co-fs');


router.get('/index.js', function *() {
  var buf = yield fs.readFile('index.js');
  this.type = 'text/javascript';
  this.body = buf.toString();
});

router.get('/boom.jpg', function *() {
  this.body = yield fs.readFile('boom.jpg');
});

router.get('/', function *() {
  var buf = yield fs.readFile('index.html');
  this.body = buf.toString();
});

app.use(router.routes());

var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

io.on('connection', function(socket) {

  socket.on('poke', function(data) {
    console.log('poke', data);
  });

  socket.on('disconnect', function() {
    console.log('disconnect');
  });

  boom();

  function boom() {
    var rand =  Math.random();
    socket.emit('boom', rand);

    setTimeout(boom, rand * 5000);
  }
});

server.listen(3000);
