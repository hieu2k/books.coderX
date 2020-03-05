const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/login', authController.login);

router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

module.exports = router;