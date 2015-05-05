var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

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

app.get('/index.js', function(req, res) {
  fs.createReadStream('index.js').pipe(res);
});

app.get('/boom.jpg', function(req, res) {
  fs.createReadStream('boom.jpg').pipe(res);
});

app.get('*', function(req, res) {
  fs.createReadStream('index.html').pipe(res);
});

server.listen(3000);
