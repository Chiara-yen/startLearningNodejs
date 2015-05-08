var expect = require('chai').expect;
var sinon = require('sinon');
var randomThrow = require('../random-throw');
var aTry = require('../try');
var random = require('../random');


describe('try', function() {
  afterEach(function() {
    randomThrow.run.restore();
  });

  it('throw error', function() {
    var stub = sinon.stub(randomThrow, 'run').throws();
    try {
      aTry();
    } catch (e) {
      expect(e.constructor.name).to.be.equal('Error');
    }
  });

  it('not throws error', function() {
    var stub = sinon.stub(randomThrow, 'run').returns(0.3);
    var pass, result;
    try {
      result = aTry();
      pass = true;
    } catch (e) {

    }
    expect(pass).to.be.true;
    expect(result).to.be.equal(0.3);
  });

});

describe('random', function() {
  afterEach(function() {
    Math.random.restore();
  });

  it('call multi-time', function() {
    var stub = sinon.stub(Math, 'random');
    stub.onCall(0).returns(0.35);
    stub.onCall(1).returns(0.56);
    stub.onCall(2).returns(0.91);

    expect(random.times(2)).to.be.equal(0.35 * 2);
    expect(random.times(3)).to.be.equal(0.56 * 3);
    expect(random.times(1)).to.be.equal(0.91);
  });

});
