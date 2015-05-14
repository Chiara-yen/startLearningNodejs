var cool = require('cool-ascii-faces');
var face = document.getElementById('face');

setTimeout(function changeFace() {
  face.innerHTML = cool();
  setTimeout(changeFace, 2000);
}, 2000);

