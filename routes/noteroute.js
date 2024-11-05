const express = require('express');
const router = express.Router();
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/notecontroller');

// Get all notes
router.get('/', getNotes);

// Create a new note
router.post('/create', createNote);

// Update an existing note by ID
router.put('/update/:id', updateNote);

// Delete a note by ID
router.delete('/delete/:id', deleteNote);

module.exports = router;
