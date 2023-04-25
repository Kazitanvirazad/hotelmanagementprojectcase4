const chai = require('chai');
const chaihttp = require('chai-http');
const res = require('express/lib/response');

const app = require('../app.js');

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaihttp);

describe('Testing Server response', () => {
    it('should return status 1 for phone- 8734234785', (done) => {
        chai.request('http://localhost:8088/data').get('/validate?phone=8734234785').end((err, result) => {
            // result.should.have.status(200);
            // result.body.length.should.be.eql(2);
            // console.log(result.body.status);
            let output = result.body.status;
            output.should.be.eql(1);
        });
        done();
    });

    it('server connection status should be 200', (done) => {
        chai.request('http://localhost:8088/data').get('/validate?phone=8734234785').end((err, result) => {
            result.should.have.status(200);
        });
        done();

    });

    it('response invoice data has bookId = 3301',(done)=>{
        chai.request('http://localhost:8088/data').get('/invoice?bookId=3301').end((err,result)=>{
            // console.log(result.body);
            let output=result.body.data.book_id;
            output.should.be.eql(3301);     //to execute this test we need to send json as the server http reponse
        });
        done();
    });
});