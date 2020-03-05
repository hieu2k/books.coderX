const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/login', userController.loginPost);

//create user
router.post('/signup', userController.signup);

module.exports = router;