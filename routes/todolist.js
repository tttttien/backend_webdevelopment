const express = require('express');
const router = express.Router();
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/todolistcontroller');

// Get all todos
router.get('/', getToDo);

// Create a new todo
router.post('/save', saveToDo);

// Update an existing todo by ID
router.put('/update/:id', updateToDo);

// Delete a todo by ID
router.delete('/delete/:id', deleteToDo);

module.exports = router;
