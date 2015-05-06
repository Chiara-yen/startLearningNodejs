var jsdom = require('jsdom');

var URL = 'https://github.com/Chiara-yen/startLearningNodejs';

jsdom.env(
  URL,
  [ '//code.jquery.com/jquery.js' ],
  function (err, window) {
    console.log(window.$('.author a span').text() + '/' + window.$('.js-current-repository').text());
  }
);
