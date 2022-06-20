import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

export const getAllTasks = (req, res) => {
    res.send('Get All Tasks...');
}

export const getTask = (req, res) => {
    res.send('Get Task...');
}

export const updateTask = (req, res) => {
    res.send('Update Task...');
}

export const deleteTask = (req, res) => {
    res.send('Delete Task...');
}
