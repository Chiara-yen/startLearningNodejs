var request = require('supertest');
var app = require('../app');

var FAKE = { name: 'Tim', species: 'cat' };

describe('GET /', function() {
  it('will return queries', function(done) {
    request(app.listen())
      .get('/')
      .query(FAKE)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        if (!(res.body && res.body.name === FAKE.name && res.body.species === FAKE.species))
          return 'not response bodies';
      })
      .end(done);
  });
});


describe('POST /', function() {
  it('will return bodies', function(done) {
    request(app.listen())
      .post('/')
      .send(FAKE)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        if (!(res.body && res.body.name === FAKE.name && res.body.species === FAKE.species))
          return 'not response bodies';
      })
      .end(done);
  });
});
