const express = require('express');
const { handleLogin, handleRegister, handleForgotPassword } = require('../CONTROLLERS/authCtrl');

const router = express.Router();

// REGISTER
router.post('/register', handleRegister);

// LOGIN
router.post('/login', handleLogin);

// FORGOT PASSWORD
router.post('/forgot-password', handleForgotPassword);

module.exports = router;
