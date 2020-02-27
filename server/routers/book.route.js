const express = require('express');

const router = express.Router();
const bookController = require('../controllers/book.controller');

//@ GET BOOKS
router.get('/books', bookController.books);

//@ POST BOOK
router.post('/books', bookController.postBook);

//@ PUT BOOK WITH ID
router.put('/books/:id', bookController.putBook);

//@ PATCH BOOK WITH ID
router.patch('/books/:id', bookController.patchBook);

//@ DELETE BOOK WITH ID
router.delete('/books/:id', bookController.deleteBook)

module.exports = router;