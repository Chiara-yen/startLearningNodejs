var express = require('express');
var app = express();

var router = express.Router();


router.get('/', function(req, res) {
  res.send('Home');
});

router.get('/tim', function(req, res) {
  res.send('Tim');
});

router.get('/roth', function(req, res) {
  res.send('Roth');
});

app.use('/', router);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(3000);
