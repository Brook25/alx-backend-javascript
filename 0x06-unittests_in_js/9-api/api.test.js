const request = require('request');
const chai = require("chai");
const expect = chai.expect;

describe('Index page', function () {
  it('...', function (done) {
	request('http://localhost:7865', (err, response, body) => {
		expect(response.statusCode).to.equal(200);
		expect(body).to.equal('Welcome to the payment system');
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/12', (err, response, body) => {
		expect(response.statusCode).to.equal(200);
		expect(body).to.equal('Payment methods for cart 12');
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/hello', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/a1', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/1a', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/1a1', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/a1b', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
  it('...', function (done) {
	request('http://localhost:7865/cart/', (err, response, body) => {
		expect(response.statusCode).to.equal(404);
		done()
	})
  })
});
