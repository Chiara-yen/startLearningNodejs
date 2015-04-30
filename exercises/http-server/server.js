var http = require('http');
var fs = require('fs');


exports.start = start;


function start() {
	http.createServer(responseHelloWorld).listen(3000);
}

function responseHelloWorld (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});

	fs.readFile(__dirname + '/hello.txt', function(err, text) {
		response.write(text);
		response.end();
	});
}
