var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

inherits(Peer, EventEmitter);

var peer1 = new Peer();
var peer2 = new Peer();

peer1.on('message', function(msg) {
  peer2.emit('message', msg);
});

peer2.on('message', function(msg) {
  console.log('message:\n', msg);
});

peer1.emit('message', 'Yooooooo');

function Peer() {

}
