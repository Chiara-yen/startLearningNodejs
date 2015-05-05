var Nightmare = require('nightmare');
var expect = require('chai').expect;

describe('test github webpage', function() {
  this.timeout(30000);

  it('link page should display author', function(done) {
    new Nightmare()
      .goto('https://github.com/Chiara-yen/startLearningNodejs')
      .click('.author a')
      .wait()
      .evaluate(function () {
        return document.querySelector('.vcard-username').innerText;
      }, function (name) {
        expect(name).to.equal('Chiara-yen');
      })
      .run(done);
  });
});
