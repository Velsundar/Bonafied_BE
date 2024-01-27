const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      registrationNumber,
      phoneNumber,
      department,
      batch,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      registrationNumber,
      phoneNumber,
      department,
      batch,
    });
    res.send("User registered successfully!");
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(400).send(`Registration failed: ${err.message}`);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, email: user.email });
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
