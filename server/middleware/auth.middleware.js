const jwt = require('jsonwebtoken');
const key = require('../config/default');
const User = require('../model/users.model');

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        res.redirect('/admin/login');
        return;
    }
    const decoded = jwt.verify(token, key.token.secret);

    const UserId = decoded.userId;

    if (!UserId) {
        res.redirect('/admin/login');
        return;
    }

    User.findById(UserId).then(user => {
        if (!user) {
            res.redirect('/admin/login');
            return;
        }
        console.log('User is: ', user);
        next();
    });
}