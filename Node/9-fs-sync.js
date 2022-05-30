const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs');
//console.log(fs);

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

const data = `Here is the content of first.txt and second.txt file: ${first} ${second}`;

writeFileSync('./content/result-sync.txt', data, {flag: 'a'});
