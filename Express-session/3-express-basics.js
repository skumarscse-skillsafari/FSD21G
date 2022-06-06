const express = require('express');

const app = express();

// app.get('path', (req, res) => {
    // res.status(200).send('Message')
// })

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>This is about page</h1>');
});

app.get('/contact', (req, res) => {
    res.status(200).send('<h1>This is contact page</h1>');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource / Page not found</h1>');
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});


// app.get - used to create get route
// app.post - used to create post route
// app.put - used to create put route
// app.delete - used to create delete route
// app.all - 
// app.use - used to add middleware
// app.listen - used to create port for the server
