var request = require('supertest');
var assert = require('assert');
var stockRepository = require('../inMemoryRepo');
var app = require('../app')(stockRepository);

describe('GET /user', function(){
    it('respond with json', function(done){
        request(app)
            .post('/stock')
            .send({
                "isbn": "1234567890",
                "count": 10
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert.equal(res.body.isbn, "1234567890");
                done();
            });
    })
})