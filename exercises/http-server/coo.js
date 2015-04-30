var co = require('co');
var http = require('http');
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


exports.start = start;


function start() {
	http.createServer(responseHelloWorld).listen(3000);
}

function responseHelloWorld (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});

	co(function *() {
		var text = yield readFile(__dirname + '/hello.txt');
		response.write(text + ' Tim!');
		response.end();
	});
}


/* ES7
async function *() {
	var text = await readFile(__dirname + '/hello.txt');
	response.write(text);
	response.end();
}
*/