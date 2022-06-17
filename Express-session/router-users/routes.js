const express = require('express');
const router = express.Router();

const {createUser, getUsers, getUser, updateUser, deleteUser} = require('./userController');

// Defining Route : Method - 1
// Create
// router.post('/user', createUser); // http://localhost:5000/api/user
// // Read
// router.get('/users', getUsers); // http://localhost:5000/api/users
// router.get('/user/:id', getUser); // http://localhost:5000/api/user/1
// // Update
// router.put('/user/:id', updateUser); // http://localhost:5000/api/user/1
// // Delete
// router.delete('/user/:id', deleteUser); // http://localhost:5000/api/user/1

// Defining Route : Method - 2
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser); // http://localhost:5000/api/user/:id
router.route('/user').post(createUser); // http://localhost:5000/api/user
router.route('/users').get(getUsers);   // http://localhost:5000/api/users

module.exports = router;