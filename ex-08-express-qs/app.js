var express = require('express');
var app = express();


app.use(function(req, res) {
  res.json(req.query);
});


app.listen(3000);
