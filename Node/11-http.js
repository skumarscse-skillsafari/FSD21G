const http = require('http');
//console.log(http);

const server = http.createServer((req, res) => { // req is an object, used to receive the request // res is also an object, used to send the response
    // console.log(req.url);
    // res.write('This is a home page'); // initiating and sending the response
    // res.end(); // ending the response cycle

    if (req.url === '/') {
        res.write('This is a home page.');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page.');
        res.end();
    } else if (req.url === '/contact') {
        // res.write();
        res.end('This is contact page.');
    } else {
        // res.write(`
        // <h1>This page does not exists.</h1>
        // <p>Click below link to go home page.<p>
        // <a href='/'>Back to home page.</a>
        // `);
        res.end(`
        <h1>This page does not exists.</h1>
        <p>Click below link to go home page.<p>
        <a href='/'>Back to home page.</a>
        `);
    }
})

server.listen(5000, () => {
    console.log(`Your server is running in http://localhost:5000`);
});