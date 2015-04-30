var http = require('http');
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});

  readFile(__dirname + '/hello.txt')
  .then(function(text) {
    response.write(text);
    response.end();
  });

}).listen(3000);


/*
new Promise(function(resolve, reject) {});
Promise.a = function(){...};
*/
