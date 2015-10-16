var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();
var server = require('../server/app');
var expect = chai.expect;

chai.use(chaiHttp);

// sample!
describe('HTTP routes', function() {
  it('GET / should have 200 code', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('GET / should have 200 code', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(404);
        done();
      });
  });

});
