/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the note
 *         title:
 *           type: string
 *           description: The title of your note
 *         content:
 *           type: string
 *           description: The content of your note
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the note was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the note was last updated
 */

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: The Notes management API
 * /notes:
 *   get:
 *     summary: Lists all the notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: The list of the notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: The created note.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Some server error
 * /notes/{id}:
 *   get:
 *     summary: Get the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 *   put:
 *     summary: Update the note by the id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: The note was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note was deleted
 *       404:
 *         description: The note was not found
 */


const express = require('express');
const router = express.Router();
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/notecontroller');

// Get all notes
router.get('/', getNotes);

// Create a new note
router.post('/', createNote);

// Update an existing note by ID
router.put('/:id', updateNote);

// Delete a note by ID
router.delete('/:id', deleteNote);

module.exports = router;
