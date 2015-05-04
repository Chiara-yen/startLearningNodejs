var express = require('express');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var bcrypt = require('bcrypt');
var hash = Promise.promisify(bcrypt.hash);
var compare = Promise.promisify(bcrypt.compare);
var bson = require('bson');
var BSON = bson.BSONPure.BSON;

var app = express();

var PASSWORD_FILE = './password.bson';

var exists = fs.existsSync(PASSWORD_FILE);

if (!exists) {
  fs.writeFileSync(PASSWORD_FILE, BSON.serialize({}));
}


app.get('/signup', function(req, res) {
  var passwordList;
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
    return BSON.deserialize(buf);
  })
  .then(function(list) {
    passwordList = list;
    return hash(password, 10);
  })
  .then(function(hashed) {
    passwordList[username] = hashed;
    return fs.writeFileAsync(PASSWORD_FILE, BSON.serialize(passwordList));
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
    return BSON.deserialize(buf);
  })
  .then(function(list) {
    return compare(password, list[username] || '');
  })
  .then(function(match) {
    if (match) {
      res.send('match');
    } else {
      res.send('not match');
    }
  });
});


app.listen(3000);




