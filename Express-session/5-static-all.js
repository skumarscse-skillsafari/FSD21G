const express = require('express');
// const path = require('path');
const app = express();

// console.log(path.resolve(__dirname));

app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './demo-app/index.html'));
// });


app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found.</h1>')
})

app.listen(5000, () => {
    console.log('Server is running in http://localhost:5000');
})