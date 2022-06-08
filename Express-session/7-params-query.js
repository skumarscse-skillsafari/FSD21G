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
    console.log(req.params);
    const { productID } = req.params;
    // const req = {
    //     params: {
    //         productID: '3'
    //     }
    // }
    // req.params.productID
    const singleProduct = products.find((product) => product.id === Number(productID));
    console.log(singleProduct);
    if(!singleProduct) {
        res.status(404).send('<h2>Product Not Found!!!</h2>');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req);
    console.log(req.params);
});

app.get('/api/v1/products/query', (req, res) => {
    // console.log(req);
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    // console.log(sortedProducts);
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.title.startsWith(search);
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1) {
        // return res.status(200).send('No products matched...');
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
})