const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href='/api/products'>Products List</a>`);
});

app.get('/api/products', (req, res) => {
    // id, title, price, category, image
    let newProducts = products.map((product) => {
        const {id, title, price, category, image} = product;
        return {id, title, price, category, image}
    })
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    if(!singleProduct) {
        res.status(404).send('<h2>Product Not Found!!!</h2>');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req);
    console.log(req.params);
})

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
})