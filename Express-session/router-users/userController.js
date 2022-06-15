const {users} = require('../data');

const createUser = (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please enter username'});
    }
    res.status(201).json({success: true, data: name});
}

const getUsers = (req, res) => {
    res.status(200).json({ success: true, data: users});
}

const getUser = (req, res) => {
    const {id} = req.params;
    const singleUser = users.find((user) => user.id === Number(id));
    res.status(200).json({success: true, data: singleUser});
}

const updateUser = (req, res) => {
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
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        return res.status(404).json({success: false, msg: `No User with id: ${id}`});
    }
    const newUsers = users.filter((user) => user.id !== Number(id) );
    res.status(200).json({success: true, data: newUsers});
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};