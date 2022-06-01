const {readFile} = require('fs');

console.log('First Task initiated...');
readFile('../content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log('First Task completed');
});
console.log('Initiating next task');