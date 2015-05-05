var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/users/:id', function(req, res) {
  var queryUserId = req.query.user_id;
  var bodyUserId = req.body.user_id;
  var paramUserId = req.params.id;
  res.json({
    queryUserId: queryUserId,
    bodyUserId: bodyUserId,
    paramUserId: paramUserId
  });
});

app.listen(3000);
