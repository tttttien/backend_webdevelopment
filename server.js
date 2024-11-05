const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todolist');  
const noteRoutes = require('./routes/noteroute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Set up routes before starting the server
app.use('/todos', todoRoutes);   // For todo functions
app.use('/notes', noteRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
