const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Route to get all tasks
router.get('/tasks', getAllTasks);

// Route to get a task by ID
router.get('/tasks/:id', getTaskById);

// Route to create a new task
router.post('/tasks', createTask);

// Route to update a task by ID
router.put('/tasks/:id', updateTask);

// Route to delete a task by ID
router.delete('/tasks/:id', deleteTask);

module.exports = router;
