var socket = io('http://localhost:3000');

socket.on('boom', function (data) {
  console.log('boom', data);
  var boom = document.getElementById('boom');
  boom.style.opacity = data;
  setTimeout(function() {
    boom.style.opacity = 0;
  }, 1000);
});

poke();

function poke() {
  var rand =  Math.random();
  socket.emit('poke', rand);

  setTimeout(poke, rand * 5000);
}

