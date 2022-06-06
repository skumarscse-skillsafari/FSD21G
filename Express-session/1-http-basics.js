const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    // Home page
    if (url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write('<h1>This is home page.</h1>');
        res.end();
    // About page
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write('<h1>This is about page.</h1>');
        res.end();
    // Contact Page
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write('<h1>This is contact page.</h1>');
        res.end();
    // 404
    } else {
        res.writeHead(404, { 'Content-Type' : 'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server is running in http://localhost:5000');
})