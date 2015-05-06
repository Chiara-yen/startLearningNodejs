var cons = require('consolidate');

cons.haml('views/index.haml', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
