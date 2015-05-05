var fs = require('fs');
var marked = require('marked');

fs.readFile('../README.md', function(err, buf) {
  process.stdout.write(marked(buf.toString()));
});
