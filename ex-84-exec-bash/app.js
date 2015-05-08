var exec = require('child_process').exec;

exec('pwd', puts);

exec('ls -la', puts);


function puts(err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  if (err) {
    console.log('exec error: ' + err);
  }
}
