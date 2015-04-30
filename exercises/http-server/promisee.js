var http = require('http');
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


exports.start = start;


function start() {
	http.createServer(responseHelloWorld).listen(3000);
}

function responseHelloWorld (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});

	readFile(__dirname + '/hello.txt')
	.then(function(text) {
		response.write(text);
		response.end();
	});
}


/*
new Promise(function(resolve, reject) {});
Promise.a = function(){...};
*/