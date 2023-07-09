const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('subscribe', (msg) =>{
    console.log(`Thanks for subscribing to ${msg}`);
});

eventEmitter.emit("subscribe", "College Wallah");