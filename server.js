const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');
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

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple  API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Tien",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:5001/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const spacs = swaggerjsdoc(options)
app.use(
  '/api-docs',
  swaggerui.serve,
  swaggerui.setup(spacs)
)