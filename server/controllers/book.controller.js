const Books = require('../model/books');

// @GET BOOKS
module.exports.books = async (req, res) => {
    try {
        await Books.find().then((books) => {
            return res.json(books);
        })
    } catch (err) {
        console.log("Error is: ", err);
    };
};

//@POST BOOK
module.exports.postBook = async (req, res) => {
    try {
        const book = {
            ...req.body
        };
        console.log(book);
        await new Books(book).save().then((book) => {
            console.log('New Book: ', book);
            return book;
        });
        res.status(200).send('ok');
    } catch (err) {
        console.log("error Is: ", err);
    }
};

//@PUT BOOK
module.exports.putBook = async (req, res) => {
    try {
        const id = req.params.id;
        const dataChange = {...req.body};

        await Books.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...dataChange
                }
            }
        ).then((book) => {
            console.log('Book update: ', book);
            res.status(200).send('Update ok');
        })
    } catch (error) {
        console.log("error is: ", error);
    }
};

//@PATCH BOOK WITH ID
module.exports.patchBook = async (req, res) => {
    try {
        const id = req.params.id;
        const dataChange = {...req.body};

        await Books.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...dataChange
                }
            }
        ).then((book) => {
            console.log('Book update: ', book);
            res.status(200).send('Update ok');
        })
    } catch (error) {
      console.log('error is: ', error)  
    };
};


//@DELETE BOOK
module.exports.deleteBook = async (req, res) => {
    try {
        const id = req.params.id;

        await Books.findByIdAndDelete(id).then((book) => {
            console.log('Book Delete: ', book);
        });

        res.status(200).send('Delete ok');

    } catch (err) {
        console.log("err is: ", err);
    }
};