
process.on('message', function(m) {
  console.log('CHILD got message:', m);
  process.kill(process.pid);
});

process.send({ id: process.argv[2], foo: 'bar' });
