const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../model/users.model');
const key = require('../config/default');

module.exports.loginPost = async (req, res) => {
    const dataLogin = {
        ...req.body
    };

    await User.findOne({
        username: dataLogin.username
    }).then(user => {
        if (!user) { 
            res.status(400).send('User do not exits');
            return; 
        }
        if (user.password !== dataLogin.password) {
            res.status(400).send('password wrong');
            return;
        }

        const token = jwt.sign({ userId: user.id }, key.token.secret);
        res.header('user-token', token).send(token);
        res.json({ token });
    }).catch(err => {
        console.log(err);
    })
};

module.exports.signup = async (req, res) => {
    const dataUser = {
        ...req.body
    };


};