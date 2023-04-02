const EventEmitter=require('events');

class Logger extends EventEmitter{
    log(msg){
        console.log(msg);
        this.emit('messageLogged',"MyEvent");
    }
}
module.exports=Logger;