const express = require('express');

//middleware
const authMiddleware = require('../middleware/auth.middleware');


const router = express.Router();
const bookController = require('../controllers/book.controller');

//@ GET BOOKS
router.get('/books', bookController.books);

//@ POST BOOK
router.post('/books', authMiddleware, bookController.postBook);

//@ PUT BOOK WITH ID
router.put('/books/:id', authMiddleware, bookController.putBook);

//@ PATCH BOOK WITH ID
router.patch('/books/:id', authMiddleware, bookController.patchBook);

//@ DELETE BOOK WITH ID
router.delete('/books/:id', authMiddleware, bookController.deleteBook)

module.exports = router;