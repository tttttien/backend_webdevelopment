const ToDoModel = require("../models/todolistmodel");

// Get all todos
module.exports.getToDo = async (req, res) => {
    try {
        const toDos = await ToDoModel.find();
        res.status(200).json(toDos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new todo
module.exports.saveToDo = async (req, res) => {
    const { title, completed } = req.body; // Capture title and completed from the request body
    try {
        const newToDo = await ToDoModel.create({ title, completed });
        res.status(201).json(newToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a todo by ID
module.exports.updateToDo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body; // Allow both title and completed to be updated
    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!updatedToDo) return res.status(404).json({ message: "ToDo not found" });
        res.status(200).json(updatedToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a todo by ID
module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(id);
        if (!deletedToDo) return res.status(404).json({ message: "ToDo not found" });
        res.status(200).json({ message: "ToDo deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
