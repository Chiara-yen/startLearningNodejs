var jsdom = require('jsdom');


jsdom.env(
  'https://github.com/Chiara-yen/startLearningNodejs',
  [ '//code.jquery.com/jquery.js' ],
  function (err, window) {
    console.log(window.$('.author a span').text() + '/' + window.$('.js-current-repository').text());
  }
);
