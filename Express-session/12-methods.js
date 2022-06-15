const express = require('express');
const app = express();
const {users} = require('./data');

// Access static page
app.use(express.static('./methods-public'));

// parse form data: urlencoded middleware
app.use(express.urlencoded({ extended: false }));

//Getting all the Users
app.get('/api/users', (req, res) => { //http://localhost:5000/api/users
    res.status(200).json({ success: true, data: users});
});

app.post('/login', (req, res) => {
    // req => url, params, query, body
    // console.log(req.body);
    const {name} = req.body;
    // console.log(name);
    if (name) {
        return res.status(200).send(`Welcome user: ${name}`);
    }
    res.status(401).send('Please provide username');
})

// Creating single User
app.post('/api/user', (req, res) => { // http://localhost:5000/api/user
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please enter username'});
    }
    res.status(201).json({success: true, data: name});
});

// Create a new user
app.post('/api/postman/user', (req, res) => {   // http://localhost:5000/api/user
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please enter username'});
    }
    res.status(201).json({success: true, data: [...users, name]});
});

// Get a Single User
app.get('/api/user/:id', (req, res) => { // http://localhost:5000/api/user/1
    const {id} = req.params;
    const singleUser = users.find((user) => user.id === Number(id));
    res.status(200).json({success: true, data: singleUser});
});

// Update a User
app.put('/api/user/:id', (req, res) => { // http://localhost:5000/api/user/1
    const {id} = req.params;
    const {name} = req.body;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        return res.status(404).json({success: false, msg: `No User with id: ${id}`});
    }
    const newUser = users.map((user) => {
        if(user.id === Number(id)) {
            user.name = name;
        }
        return user;
    })
    res.status(200).json({success: true, data: newUser});
});

// Delete a User
app.delete('/api/user/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        return res.status(404).json({success: false, msg: `No User with id: ${id}`});
    }
    const newUsers = users.filter((user) => user.id !== Number(id) );
    res.status(200).json({success: true, data: newUsers});
})

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});