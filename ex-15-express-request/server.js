var express = require('express');
var app = express();


app.use(function(req, res) {
  res.send('Hello');
});


app.listen(3000);
