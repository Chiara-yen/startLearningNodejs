var cons = require('consolidate');

cons.lodash('views/index.lodash', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
