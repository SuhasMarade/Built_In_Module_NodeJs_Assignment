const events = require('events');

const eventEmitter = new events.EventEmitter();

const myEventHandler = function(msg){
    console.log(`Thanks for subscribing to ${msg}`);
}

eventEmitter.addListener('subscribe', myEventHandler);
eventEmitter.emit('subscribe', 'College Wallah');

console.log(`The default maximum number of event listeners are : ${eventEmitter.getMaxListeners()}`)

eventEmitter.setMaxListeners(5)
console.log(`The Updated maximum number of event listeners are : ${eventEmitter.getMaxListeners()}`)