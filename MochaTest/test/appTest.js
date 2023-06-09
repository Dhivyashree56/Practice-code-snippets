const assert = require('chai').assert;
const sinon = require('sinon'); // import sinon package
const app = require('../app');

describe('App', function () {
    it('sayHello should return hello', function () {
        var result = app.sayHello();
        assert.equal(result, "hello");
    })

    it('sayHello should return type string', function () {
        var result = app.sayHello();
        assert.typeOf(result, 'string');
    })

    it('addResult should return 2', function () {
        var result = app.addResult(1, 1);
        assert.equal(result, 2);
    })

    it('addResult should return type number', function () {
        var result = app.addResult();
        assert.typeOf(result, 'number');
        
        // const clock = sinon.useFakeTimers(); // create a fake clock
        // console.log('clock', clock.now);
        // console.log('--------------')
        // setTimeout(function () {
        //     console.log('Timer executed');
        // }, 5000);
        // clock.tick(5000); // advance the clock by 5000ms
        // console.log('clock', clock.now); // clock 5000
    })
})