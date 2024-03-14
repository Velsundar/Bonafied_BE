const Bonafied = require("../Models/ApplyBonafiedmodel");

exports.getAll = async (req, res) => {
  try {
    const bonafiedList = await Bonafied.find();
    res.status(200).json({
      success: true,
      message: "successfully get all bonafied applications",
      data: bonafiedList,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const bonafied = await Bonafied.findById(req.params.id);
    if (!bonafied) {
      return res.status(404).json({ message: "Requested data Not found" });
    }
    res.status(200).json(bonafied);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.update = async (req, res) => {
  try {
    const updatedBonafied = await Bonafied.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBonafied) {
      return res.status(404).json({ message: "Requested data Not found" });
    }
    res.status(200).json(updatedBonafied);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newBonafied = new Bonafied(req.body);
    await newBonafied.save();
    res.status(201).json(newBonafied);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const bonafied = await Bonafied.findByIdAndDelete(req.params.id);
    if (!bonafied) {
      return res.status(404).json({ message: "Requested data Not found" });
    }
    res.status(200).json({ message: "Bonafied deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
