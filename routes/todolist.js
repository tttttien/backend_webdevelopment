/**
 * @swagger
 * components:
 *   schemas:
 *     ToDo:
 *       type: object
 *       required:
 *         - title
 *         - completed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the todo
 *         title:
 *           type: string
 *           description: The title of your todo
 *         completed:
 *           type: boolean
 *           description: Whether the todo has been completed
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the todo was added
 */

/**
 * @swagger
 * tags:
 *   name: ToDo
 *   description: The To Do List management API
 * /todos:
 *   get:
 *     summary: Lists all the todos
 *     tags: [ToDo]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToDo'
 *   post:
 *     summary: Create a new todo
 *     tags: [ToDo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToDo'
 *     responses:
 *       200:
 *         description: The created todo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       500:
 *         description: Some server error
 * /todos/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [ToDo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       404:
 *         description: The todo was not found
 *   put:
 *     summary: Update the todo by the id
 *     tags: [ToDo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToDo'
 *     responses:
 *       200:
 *         description: The todo was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [ToDo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */


const express = require('express');
const router = express.Router();
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/todolistcontroller');

// Get all todos
router.get('/', getToDo);

// Create a new todo
router.post('/', saveToDo);

// Update an existing todo by ID
router.put('/:id', updateToDo);

// Delete a todo by ID
router.delete('/:id', deleteToDo);

module.exports = router;
