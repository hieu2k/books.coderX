const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    des: {
        type: String
    },
    rate: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    }
})

const Book = mongoose.model('Book', BookSchema);

module.exports =  Book;