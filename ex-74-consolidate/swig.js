var cons = require('consolidate');

cons.swig('views/index.swig', { title: 'Tim', text: 'My App' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});
