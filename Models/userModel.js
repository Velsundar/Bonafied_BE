const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    roll_no: {
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
    password: {
        type: String,
        required: true
    },
    father_name: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        enum: ['UG', 'PG'],
        default: 'UG'
    },
    seat_type: {
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
