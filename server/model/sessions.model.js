const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema ({
    cart: {
        type: Object,
        require: true
    },
    sessionId:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Session', SessionSchema);