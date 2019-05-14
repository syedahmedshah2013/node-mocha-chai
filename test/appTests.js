const mocha = require('mocha');
const assert = require('chai').assert;
const app = require('../app');

//Results
sayHelloResult = app.sayHello;
addNumbersResult = app.addNumbers;

describe("Main Tests for App JS", function() {
    describe("sayHello()", function() {
        it("Check if Function says Hello", function() {
            assert.equal(sayHelloResult(), "Hello World!");
        });

        it("Check if the type of Function String", function() {
            assert.typeOf(sayHelloResult(), "string");
        });
    });

    describe("addNumbers()", function() {
        it("Check if the numbers are above 5", function() {
            assert.isAbove(addNumbersResult(3, 4), 5, "Numbers are greater");
        });

        it("Check if the returned result of addNumber is Number", function() {
            assert.typeOf(addNumbersResult(3, 4), "number");
        });
    })
})