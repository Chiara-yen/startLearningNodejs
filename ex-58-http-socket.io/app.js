var server = require('http').createServer(handler);
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

server.listen(3000);


function handler(req, res) {

  if (req.url === '/index.js' & req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/javascript;charset=utf-8' });
    fs.createReadStream('index.js').pipe(res);
  } else if (req.url === '/boom.jpg' & req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'image/jpeg;' });
    fs.createReadStream('boom.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
  }
}




