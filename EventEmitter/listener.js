var events=require('events');
var eventEmitter=new events.EventEmitter();
//listener1 
var listener1=function listener1(){
    console.log('Listener1 executed');
}
//Listener2
var listener2=function listener2(){
    console.log('Listener2 executed');
}
// Bind the connection event with the listener1 function
eventEmitter.addListener('connection',listener1);
// Bind the connection event with the listener2 function
eventEmitter.on('connection',listener2);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");
// Fire the connection event 
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener1);
console.log("Listener1 is removed");
// Fire the connection event 
eventEmitter.emit('connection');
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");
console.log("Program Ended!");