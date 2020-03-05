const router = require('express').Router();

const SessionController = require('../controllers/session.controller.js');


//@ GET ALL BOOK OF CART
router.get('/', SessionController.getBooks);

//@ POST A BOOK IN A CART
router.post('/:id', SessionController.book);

//@ DELETE A BOOK IN A CART
router.delete('/:id', SessionController.deleteBook);

//@ PATCH A BOOK
router.patch('/:id', SessionController.patchBook);


module.exports = router;