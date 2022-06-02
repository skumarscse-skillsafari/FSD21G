const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

// Using Event Emitter
const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Hello...');
});


server.listen(5000, () => {
    console.log('Server is running in http://localhost:5000');
});