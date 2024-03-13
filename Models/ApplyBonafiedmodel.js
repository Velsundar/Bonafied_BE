const mongoose = require('mongoose');

// Define the user schema
const BonafiedSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    regNo:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fatherName:{
        type: String,
        required: true,
    },
    purpose:{
        type: String,
        required: true,
    },
    approval:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('apply-bonafied', BonafiedSchema);

module.exports = User;
