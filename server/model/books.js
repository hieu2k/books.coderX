const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String
    },
    catalogue: {
        type: String
    },
    des: {
        type: String
    },
    rate: {
        type: Number
    },
    img: {
        type: String
    },
    price: {
        type: Number
    }
})

const Book = mongoose.model('Book', BookSchema);

module.exports =  Book;