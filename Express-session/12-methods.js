const express = require('express');
const app = express();
const {users} = require('./data');

// Access static page
app.use(express.static('./methods-public'));

// parse form data: urlencoded middleware
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
    res.status(200).json({ success: true, data: users});
});

app.post('/login', (req, res) => {
    // req => url, params, query, body
    // console.log(req.body);
    const {name} = req.body;
    // console.log(name);
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please enter a value in name field'});
    }
    res.status(201).json({success: true, user: name});
})


app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});