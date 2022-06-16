const express = require('express');
const app = express();
const userRoute = require('./routes');

// Add middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', userRoute); // http://localhost:5000/api


app.listen(5000, () => {
    console.log('Server is running in http://localhost:5000 ');
});