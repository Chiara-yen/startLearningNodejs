var koa = require('koa');
var app = koa();
var http = require('http');
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


exports.start = start;


function start() {
	http.createServer(app.callback()).listen(3000);
}

app.use(function *(next) {
	var text = yield readFile(__dirname + '/hello.txt');
	this.body = text + ' Tim!';
	yield next;
	this.body += ' Deyu!';
});

app.use(function *(next) {
	this.body += ' Roth!';
	try {
		yield next;
	} catch (e) {
		console.log('boooom!!! there is an error!');
	}

});

app.use(function *() {
	// throw new Error('boooom');
	this.body += ' Roth2!';
});

