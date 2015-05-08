var cons = require('consolidate');

cons.jade('views/index.jade', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
