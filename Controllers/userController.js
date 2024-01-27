const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const { MongooseError } = require('mongoose');

exports.register = async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already exists');
        }
        const user = await User.create(req.body);
        res.send('User registered successfully!');
    } catch (err) {
        console.error("Registration Error:", err); 
        res.status(400).send(`Registration failed: ${err.message}`);
    }
};

exports.login = async (req, res) => {
  try {
    // Login logic here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userPanel = async (req, res) => {
  try {
    // Render user panel view
    res.render("user-panel");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.adminPanel = async (req, res) => {
  try {
    // Render admin panel view
    res.render("admin-panel");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
