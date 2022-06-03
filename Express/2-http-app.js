const http = require('http');
const {readFileSync} = require('fs');

// getting all the files
const appPage = readFileSync('./demo-app/index.html');
const appStyles = readFileSync('./demo-app/style.css');
const appImages = readFileSync('./demo-app/images/bg-image.jpg');

const server = http.createServer((req, res) => {
    const url = req.url;
    // home page 
    if ( url === '/' ) {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.write(appPage);
        res.end();
    } else if ( url === '/style.css') {
        res.writeHead(200, { 'Content-Type' : 'text/css' });
        res.write(appStyles);
        res.end();
    } else if ( url === '/images/bg-image.jpg') {
        res.writeHead(200, { 'Content-Type' : 'image/jpeg' });
        res.write(appImages);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type' : 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server is running in http://localhost:5000');
})