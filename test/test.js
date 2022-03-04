// During the test the env variable is set to test
process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http'
import server from '../app/server.js';
let should = chai.should();

chai.use(chaiHttp);
// //Our parent block
describe('Math', () => {
/*
  * Test the /GET sum route
  */
  describe('/GET sum', () => {
      it('it should GET the sum of 3 and 4', (done) => {
        chai.request(server)
            .get('/api/v1/math/sum?number1=3&number2=4')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('7');
                done();
            });
      });
  });

  /*
  * Test the /GET multiply route
  */
  describe('/GET multiply', () => {
    it('it should GET the product of 5 and 6', (done) => {
      chai.request(server)
          .get('/api/v1/math/multiply?number1=5&number2=6')
          .end((err, res) => {
              res.should.have.status(200);
              res.text.should.be.eql('30');
              done();
          });

    });
  });

});