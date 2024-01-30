// Import required modules
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const routes = require('./Routes/routes');
require('dotenv').config();


// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Connect to MongoDB using mongoose
const uri = "mongodb+srv://sundaravel:1234@bonafied.eyhj5if.mongodb.net/Bonafied";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Define routes and middleware here

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
