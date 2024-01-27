const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
