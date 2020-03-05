const express = require('express');
const multer  = require('multer')

const upload = multer({ dest: 'public/uploads/' });

const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.index);

router.get('/book', adminController.book);

router.post('/book', upload.single('image'), adminController.postBook);

module.exports = router;