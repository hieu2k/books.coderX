const jwt = require('jsonwebtoken');

const key = require('../config/default');
const User = require('../model/users.model');

module.exports.login = (req, res) => {
    res.render('Admin/login');
}

module.exports.loginPost = async (req, res) => {
    const dataLogin = {
        ...req.body
    };

    await User.findOne({
        username: dataLogin.username
    }).then(user => {
        if (user.password !== dataLogin.password) {
            res.redirect('/admin/login');
            return;
        }

        const token = jwt.sign({ userId: user.id }, key.token.secret);
        res.cookie('token', token, {
            httpOnly: true
        })
    })

    res.redirect('/admin')
}

module.exports.logout = async (req, res) => {
    res.clearCookie('token',{
        httpOnly: true
    });
    res.redirect('/admin')    
}







