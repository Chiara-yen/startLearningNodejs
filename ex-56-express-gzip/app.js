var compression = require('compression');
var express = require('express');
var app = express();

// compress all requests
app.use(compression());

app.use(function(req, res) {
  var text = '';
  for (var i = 0; i < 10000; i++) {
    text += 'tim';
  }
  res.send(text);
});

app.listen(3000);
