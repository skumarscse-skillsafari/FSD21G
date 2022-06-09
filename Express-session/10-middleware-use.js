const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/products', (req, res) => {
    res.send('Products');
});

app.get('/users', (req, res) => {
    console.log(req.user);
    res.send('Users');
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
})