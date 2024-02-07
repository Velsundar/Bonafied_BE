const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const bonafiedController = require('../Controllers/BonafiedController');

// Register user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Route for getting all Bonafied records
router.get('/bonafied', bonafiedController.getAll);

// Route for getting Bonafied by ID
router.get('/bonafied/:id', bonafiedController.getById);

// Route for creating a new Bonafied record
router.post('/bonafied', bonafiedController.create);
router.delete('/deleteBonafied',bonafiedController.delete)

// Display user panel
// router.get('/user-panel', userController.userPanel);

// // Display admin panel
// router.get('/admin-panel', userController.adminPanel);
//panel rendering
    router.get('panel-render', userController.renderPanel);

module.exports = router;
