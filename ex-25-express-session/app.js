var express = require('express');
var session = require('express-session');
var app = express();


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function(req, res) {
  var sess = req.session;
  if (sess && sess.username) {
    res.send('Hello ' + sess.username);
  } else {
    res.send('Please login');
  }
});

app.get('/login', function(req, res) {
  req.session.username = req.query.username;
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

app.listen(3000);
