var cons = require('consolidate');

cons.handlebars('views/index.hbs', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
