const express = require('express');
const { handleLogin } = require('../CONTROLLERS/authCtrl');

const router = express.Router();

router.post('/login', handleLogin);

module.exports = router;