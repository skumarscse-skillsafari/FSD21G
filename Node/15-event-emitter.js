const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// Creating Event Listener
customEmitter.on('response', () => {
    console.log('Data received');
});

// Emitting the Event
customEmitter.emit('response');

// Passing parameter in events
customEmitter.on('data', (name, age) => {
    console.log(`The data has username: ${name} with age: ${age}`);
});
customEmitter.emit('data', 'John', 26);

