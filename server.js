const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/todolist');

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
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
