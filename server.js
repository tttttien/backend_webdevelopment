const express = require('express')
const mongoose = require ('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001;

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connect to MongoDB`))
.catch((err)=>console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

