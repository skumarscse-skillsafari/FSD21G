const express = require('express');
const {products, users} = require('./data');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h2>Click below link to see products and users API</h2>
        <ul>
            <li><a href='/products'>Products</a></li>
            <li><a href='/users'>Users</a></li>
        </ul>
    `);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});