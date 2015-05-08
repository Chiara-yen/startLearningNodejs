var cons = require('consolidate');

cons.mustache('views/index.mustache', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
