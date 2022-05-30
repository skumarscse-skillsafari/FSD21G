const http = require('http');
//console.log(http);

const server = http.createServer((req, res) => {
    console.log(req.url);
})

server.listen(5000, () => {
    console.log(`Your server is running in http://localhost:5000`);
});