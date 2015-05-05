var request = require('superagent');
var cheerio = require('cheerio');


request
.get('https://github.com/Chiara-yen/startLearningNodejs')
.query({ 'a': 1 }) // ?a=1, for demo
.end(function(err, res) {
  var $;
  if (res.ok) {
    $ = cheerio.load(res.text);
    console.log($('.author a span').text() + '/' + $('.js-current-repository').text());
  } else {
    alert('Oh no! error ' + res.text);
  }
});
