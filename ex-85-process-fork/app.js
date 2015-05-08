var fork = require('child_process').fork;

for(var i = 0; i < 10; i++) {
  var worker = fork('worker.js', [ i ]);
  worker.on('message', function(m) {
    console.log('PARENT got message:', m);
  });
  worker.send({ hello: 'world' });
  worker.on('close', function () {
    console.log('child process exited');
  });
}




