var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index', {
    title: req.query.title || 'Default Title',
    content: req.query.content || 'Default Content',
  });
})

app.listen(3000);
