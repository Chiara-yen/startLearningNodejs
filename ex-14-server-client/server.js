var http = require('http');


http.createServer(function(request, response) {
  console.log('.,,');
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello');
  response.end();
}).listen(3000);
