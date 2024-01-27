const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Register user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Display user panel
// router.get('/user-panel', userController.userPanel);

// // Display admin panel
// router.get('/admin-panel', userController.adminPanel);
//panel rendering
    router.get('panel-render', userController.renderPanel);

module.exports = router;
