var http = require('http');
var Promise = require('bluebird');
var writeFile = Promise.promisify(require('fs').writeFile);


http.createServer(function(request, response) {

  var url = request.url;
  var parts = url.split('?');
  var str = parts[1] || '';

  response.writeHead(200, {'Content-Type':'text/plain'});

  writeFile(__dirname + '/hello.txt', str)
  .then(function() {
    response.write('success');
    response.end();
  });

}).listen(3000);


/*
new Promise(function(resolve, reject) {});
Promise.a = function(){...};
*/
