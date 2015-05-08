var expect = require('chai').expect;
var sinon = require('sinon');
var once = require('../once');
var fsProxy = require('../fs-proxy');
var fs = require('fs');


describe('once', function() {

  it('calls the original function', function() {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();

    expect(callback.called).to.be.true;
  });

  it('calls the original function only once', function () {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();
    proxy();

    expect(callback.calledOnce).to.be.true;
    // ...or:
    // assert.equals(callback.callCount, 1);
  });

  it('calls original function with right this and args', function () {
    var callback = sinon.spy();
    var proxy = once(callback);
    var obj = {};

    proxy.call(obj, 1, 2, 3);

    expect(callback.calledOn(obj)).to.be.true;
    expect(callback.calledWith(1, 2, 3)).to.be.true;
  });
});


describe('fsProxy', function() {

  before(function() {
    sinon.spy(fs, 'writeFile');
  });

  after(function() {
    fs.writeFile.restore();
  });

  it('calls the fs write', function () {
    fsProxy.writeFile('./a.txt', 'ya!');
    expect(fs.writeFile.calledOnce).to.be.true;
    expect(fs.writeFile.getCall(0).args[0]).to.be.equal('./a.txt');
    expect(fs.writeFile.getCall(0).args[1]).to.be.equal('ya!');
  });
});
