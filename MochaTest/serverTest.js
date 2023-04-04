var http = require('http');
const assert=require('chai').assert;
const server=require('../server');

describe('HTTP Server test',function(){
    before(function(){
        server.listen(8080);
    });

    after(function(){
        server.close();
    });

    describe('server check',function(){
        it('should be Hello Mocha!',function(done){
            http.get('http://127.0.0.1:8080', function(response){
                assert.equal(response.statusCode, 200);

                var text='';
                response.on('data',function(d){
                    text+=d;
                });

                response.on('end',function(){
                    assert.equal(text,'Hello Mocha!');
                    done();
                });
            });
        })
    })
})