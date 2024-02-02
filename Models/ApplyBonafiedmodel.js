const mongoose = require('mongoose');

// Define the user schema
const BonafiedSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true,
    },
    District:{
        type: String,
        required: true,
    },
    Country:{
        type: String,
        required: true,
    },
    State:{
        type: String,
        required: true,
    }
});

const User = mongoose.model('apply-bonafied', BonafiedSchema);

module.exports = User;
