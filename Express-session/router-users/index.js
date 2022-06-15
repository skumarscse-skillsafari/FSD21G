const express = require('express');
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('./userController');
const app = express();

// Add middleware
app.use(express.urlencoded({extended: false}));
// Create
app.post('/api/user', createUser); // http://localhost:5000/api/user
// Read
app.get('/api/users', getUsers); // http://localhost:5000/api/users
app.get('/api/user/:id', getUser); // http://localhost:5000/api/user/1
// Update
app.put('/api/user/:id', updateUser); // http://localhost:5000/api/user/1
// Delete
app.delete('/api/user/:id', deleteUser); // http://localhost:5000/api/user/1


app.listen(5000, () => {
    console.log('Server is running in http://localhost:5000 ');
});