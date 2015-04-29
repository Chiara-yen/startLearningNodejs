var http = require('http');
var fs = require('fs');


http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});

	fs.readFile(__dirname + '/hello.txt', function(err, text) {
		response.write(text);
		response.end();
	});

}).listen(3000);
