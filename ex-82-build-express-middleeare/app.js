var express = require('express');
var app = express();


app.use(require('./req-decorator')({ count: 5 }));
app.use(require('./res-decorator')({ name: 'Roth' }));


app.use(function(req, res) {
  res.send('count: ' + req.query.count);
});

app.listen(3000);
