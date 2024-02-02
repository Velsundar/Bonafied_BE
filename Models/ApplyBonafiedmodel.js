const mongoose = require('mongoose');

// Define the user schema
const BonafiedSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    district:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    }
});

const User = mongoose.model('apply-bonafied', BonafiedSchema);

module.exports = User;
