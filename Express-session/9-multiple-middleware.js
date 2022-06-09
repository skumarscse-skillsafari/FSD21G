const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}

const test = (req, res, next) => {
    console.log('Test middleware');
    next();
}

app.get('/', [logger, test], (req, res) => {
    res.send('Home');
});

app.get('/about', test, (req, res) => {
    res.send('About');
});

app.get('/contact', logger, (req, res) => {
    res.send('Contact');
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});