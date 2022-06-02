const http = require('http');
const {readFileSync, createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    // const text = readFileSync('./file.txt', 'utf-8');
    // res.end(text);
    const fileStream = createReadStream('./file.txt', {encoding: 'utf-8'});
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
});

server.listen(5000, () => {
    console.log('Server is running in http://localhost:5000');
});