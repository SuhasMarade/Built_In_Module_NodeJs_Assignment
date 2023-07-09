const events = require('events');

let eventEmitter = new events.EventEmitter();

let eventHandler = function(msg){
    console.log(`Thanks for subscribing to ${msg}`)
};

eventEmitter.addListener('subscribe', eventHandler);
console.log("before removal of handler");
eventEmitter.emit('subscribe',"College Wallah");

eventEmitter.removeListener('subscribe', eventHandler);
console.log("after removal of handler");
eventEmitter.emit('subscribe', "College Wallah");