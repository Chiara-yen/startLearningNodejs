var Nightmare = require('nightmare');

new Nightmare()
  .goto('https://github.com/Chiara-yen/startLearningNodejs')
  .type('.js-site-search-field', 'github nightmare')
  .click('.author a')
  .wait(5000)
  .evaluate(function () {
    return document.querySelector('.vcard-username').innerText;
  }, function (name) {
    console.log('name:', name);
  })
  .run();
