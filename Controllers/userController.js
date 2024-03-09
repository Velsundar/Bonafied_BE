const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const {
      mode,
      password,
      year,
      email,
      phoneNumber,
      department,
      seat_type,
      roll_no,
      father_name,
      name,
      gender,
      role,
    } = req.body;
    const userMode = mode || "UG";
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      mode: userMode,
      password: hashedPassword,
      year,
      email,
      phoneNumber,
      department,
      seat_type,
      father_name,
      roll_no,
      name,
      gender,
      role,
    });
    res.send("User registered successfully!");
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(400).send(`Registration failed: ${err.message}`);
  }
};

exports.login = async (req, res) => {
  try {
    const { roll_no, password } = req.body;
    const user = await User.findOne({ roll_no });
    if (!user) {
      return res.status(401).json({ message: "Invalid roll_no or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid roll_no or password" });
    }
    const token = jwt.sign(
      { userId: user._id, roll_no: user.roll_no, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, roll_no: user.roll_no, role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.renderPanel = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (req.user.role === "admin") {
      res.render("admin-panel");
    } else {
      res.render("user-panel");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
