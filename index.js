// Import required modules
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

// Create an Express application
const app = express();
app.use(cors());

// Connect to MongoDB
const uri = "mongodb+srv://sundaravel:1234@bonafied.eyhj5if.mongodb.net/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("Bonafied");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log("Connectdb", db);
  }
}

connectToMongoDB();

// Define routes and middleware here

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
