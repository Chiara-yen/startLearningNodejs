var cons = require('consolidate');

cons.react('views/app.react.js', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
