var express = require('express');
var session = require('express-session');
var app = express();


app.use(session(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
})));

app.get('/login', function(req, res) {
  req.session.username = req.query.username;
});

app.get('/', function() {
  if (req.session & req.session.username) {
    res.send('')
  } else {
    res.send('')
  }
});

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    // cannot access session here
  });
});

app.listen(3000);
