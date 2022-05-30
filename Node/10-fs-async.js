const {readFile, writeFile} = require('fs');

console.log('Start...');
// readFile('path', 'encoding type' 'callback function : err, result')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
    const second = result;
    const data = `The contents of first.txt and second.txt is: ${first} ${second}`;
    writeFile('./content/result-async.txt', data, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('Done with writing the contents...');
    })
    })
})
console.log('End...');
console.log('Starting next task...');