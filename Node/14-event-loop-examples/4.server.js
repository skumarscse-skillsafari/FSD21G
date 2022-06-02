const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello...')
});

console.log('Testing...');

server.listen(5000, () => {
    console.log('Server is listening in http://localhost:5000');
});

console.log('Another Test..');