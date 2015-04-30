var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json(req.query);
});

app.post('/', function(req, res) {
  res.json(req.body);
});

module.exports = app;
