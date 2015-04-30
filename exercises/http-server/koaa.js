var koa = require('koa');
var app = koa();
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);


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
		console.log('TIM');
	}

});

app.use(function *() {
	throw new Error('boooom');
	this.body += ' Roth2!';
});


app.listen(3000);
