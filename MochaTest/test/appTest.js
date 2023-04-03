const assert = require('chai').assert;
const app = require('../app');

describe('App',function(){
    it('sayHello should return hello', function(){
        var result=app.sayHello();
        assert.equal(result,"hello");
    })

    it('sayHello should return type string', function(){
        var result=app.sayHello();
        assert.typeOf(result,'string');
    })

    it('addResult should return 2', function(){
        var result=app.addResult(1,1);
        assert.equal(result,2);
    })

    it('addResult should return type number', function(){
        var result=app.addResult();
        assert.typeOf(result,'number');
    })
})