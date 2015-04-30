var http = require('http');
var qs = require('querystring');

http.createServer(function(request, response) {
  var url = request.url;
  var parts = url.split('?');
  var str = parts[1] || '';
  var query = qs.parse(str);
  response.write(JSON.stringify(query));
  response.end();
}).listen(3000);
