var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var express = require('express');

// setup route middlewares
var csrfProtection = csrf({ cookie: true });

// create express app
var app = express();

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(csrfProtection);

app.get('/form', function(req, res) {
  // pass the csrfToken to the view
  var html =
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
      '<meta charset="UTF-8">' +
      '<title>Document</title>' +
    '</head>' +
    '<body>' +
      '<form action="/process" method="POST">' +
        '<input type="hidden" name="_csrf" value="' + req.csrfToken() + '">' +
        'Favorite color: <input type="text" name="favoriteColor">' +
        '<button type="submit">Submit</button>' +
      '</form>' +
    '</body>' +
    '</html>';

  res.send(html);
});

app.post('/process', function(req, res) {
  res.send('data is being processed');
});


app.listen(3000);
