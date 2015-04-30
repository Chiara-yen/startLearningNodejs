var http = require('http');


http.createServer(function(request, response) {

  var url = request.url;
  var parts = url.split('?');
  var path = parts[0] || '';

  if (path === '/') {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Home');
  } else if (path === '/tim') {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Tim');
  } else if (path === '/roth') {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Roth');
  } else {
    response.writeHead(404);
    response.write('Page Not Found');
  }

  response.end();

}).listen(3000);
