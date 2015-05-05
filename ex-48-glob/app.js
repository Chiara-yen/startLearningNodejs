var glob = require('glob');


glob('**/*.js', function(err, files) {
  console.log('**/*.js:\n', files);

  console.log('\n\n\n');
});

glob('**/tim.*', function(err, files) {
    console.log('**/tim.*:\n', files);

    console.log('\n\n\n');
});

glob('tim.*', function(err, files) {
  console.log('tim.*:\n', files);

  console.log('\n\n\n');
});
