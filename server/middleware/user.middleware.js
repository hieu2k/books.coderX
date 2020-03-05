const jwt = require('jsonwebtoken');
const key = require('../config/default');
const User = require('../model/users.model');

module.exports = (req, res, next) => {
    const token = req.header('user-token');
    if (!token) {
        res.status(400).send('Token wrong ok....');
        return;
    }
    const decoded = jwt.verify(token, key.token.secret);

    const UserId = decoded.userId;
    if (!UserId) {
        res.status(400).send('Token wrong ok....');
        return;
    }

    User.findById(UserId).then(user => {
        if (!user) {
            res.status(400).send('User is not defind');
            return;
        }
        console.log('User is: ', user);
        next();
    });
}