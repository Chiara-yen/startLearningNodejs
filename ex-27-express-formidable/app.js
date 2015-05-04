var express = require('express');
var formidable = require('formidable');
var app = express();


app.post('/upload', function(req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = 'upload';
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    console.log(files);
    res.json({fields: fields, files: files});
  });
});


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(3000);
