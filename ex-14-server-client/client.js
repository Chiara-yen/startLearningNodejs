var http = require('http');

http.get('http://localhost:3000/', function(res) {
  res.on('data', function (chunk) {
     console.log(chunk.toString());
  });
});
