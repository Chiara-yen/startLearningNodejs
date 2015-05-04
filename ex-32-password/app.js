var express = require('express');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var app = express();

var PASSWORD_FILE = './password.json';

var exists = fs.existsSync(PASSWORD_FILE);

if (!exists) {
  fs.writeFileSync(PASSWORD_FILE, '{}');
}


app.get('/signup', function(req, res) {
  var username = req.query.username;
  if (!username) {
    return res.send('need username');
  }
  var password = req.query.password;
  if (!password) {
    return res.send('need password');
  }
  fs.readFileAsync(PASSWORD_FILE)
  .then(function(buf) {
    return JSON.parse(buf.toString());
  })
  .then(function(list) {
    list[username] = password;
    return fs.writeFileAsync(PASSWORD_FILE, JSON.stringify(list));
  })
  .then(function() {
    res.send('success');
  });
});

app.get('/verify', function(req, res) {
  var username = req.query.username;
  if (!username) {
    return res.send('need username');
  }
  var password = req.query.password;
  if (!password) {
    return res.send('need password');
  }
  fs.readFileAsync(PASSWORD_FILE)
  .then(function(buf) {
    return JSON.parse(buf.toString());
  })
  .then(function(list) {
    if (password === list[username]) {
      res.send('match');
    } else {
      res.send('not match');
    }
  });
});


app.listen(3000);




