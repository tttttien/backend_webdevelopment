const express = require('express')
const mongoose = require ('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

