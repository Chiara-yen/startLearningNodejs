var program = require('commander');
var gm = require('gm');

program
  .version('0.0.1')
  .option('-w, --width [value]', 'Add the specified width', '100')
  .option('-h, --height [value]', 'Add the specified height', '100')
  .parse(process.argv);


var width = +program.width || +program.height || 100;
var height = +program.height || +program.width || 100;

console.log('width: ', width);
console.log('height: ', height);

var files = program.args;
var file = files[0];
var fileParts = file.split('/');
var length = fileParts.length;
var filename = fileParts[ length - 1 ];

console.log('file: ', file);
console.log('filename: ', filename);

gm(file)
.resize(width, height)
.write('output/' + filename, function (err) {
  if (!err) console.log('done');
});
