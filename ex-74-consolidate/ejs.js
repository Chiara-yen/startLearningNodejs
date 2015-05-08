var cons = require('consolidate');

cons.ejs('views/index.ejs', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
