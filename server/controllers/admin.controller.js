const Book = require('../model/books.model');

module.exports.index = (req, res) => {
    res.render('index');
};

module.exports.book = (req, res) => {
    res.render('Admin/postBook');
};

module.exports.postBook = async (req, res) => {
    const image = 'http://localhost:8080/' + req.file.path.split('/').splice(1).join('/');
    const data = {
        ...req.body,
        image: image
    }

    await new Book(data).save().then((book) => {
        console.log('new book: ', book)
    }).catch((err) => {
        console.log(err);
    })

    res.redirect('/admin');
};