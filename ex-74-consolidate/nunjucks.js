var cons = require('consolidate');

cons.nunjucks('views/index.html', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
