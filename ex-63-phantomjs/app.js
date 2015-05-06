var page = require('webpage').create();
var system = require('system');

var count = system.args[1] || 1;

var URL = 'https://github.com/Chiara-yen/startLearningNodejs';

page.onConsoleMessage = function(msg) {
  for (var i = 0; i < count; i++) {
    console.log(msg);
  }
};

page.open(URL, function(status) {
  if (status !== 'success') {
    return console.log('Unable to access network');
  }

  page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js', function() {

    var OUTER_VARIABLE = {
      a: 1,
      b: 2,
      c: 3
    };

    page.evaluate(function(outer) {
      console.log('outer variable:');
      console.log(outer.a);
      console.log(outer.b);
      console.log(outer.c);
      console.log(window.$('.author a span').text() + '/' + window.$('.js-current-repository').text());
    }, OUTER_VARIABLE);

    page.render('github.png');

    phantom.exit();

  });
});
