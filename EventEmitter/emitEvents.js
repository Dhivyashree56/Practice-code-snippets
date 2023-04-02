const EventEmitter=require('events');
const Logger=require('./logger.js');
//const emitter=new EventEmitter();
const logger=new Logger();
//adding a listener
logger.on('messageLogged',(msg)=>{
    console.log(msg);
})
logger.log('Logger.log');