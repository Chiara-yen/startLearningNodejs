var express = require('express');
var app = express();

var accounts = express.Router();
var apis = express.Router();
var docs = express.Router();

accounts.get('/', function(req, res) {
  res.send('Accounts');
});

apis.get('/', function(req, res) {
  res.send('Apis');
});

docs.get('/', function(req, res) {
  res.send('Docs');
});

app.use('/accounts', accounts);
app.use('/apis', apis);
app.use('/docs', docs);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(3000);
