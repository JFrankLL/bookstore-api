var router = require('express').Router();
var Book = require('../models/book');

router.get('/', (req, res) => {
    Book.getBooks((err, books) => {
        if(err)
            throw err;
        res.json(books);
    });
});

router.get('/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if(err)
            throw err;
        res.json(book);
    });
});

router.post('/', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if(err)
            throw err;
        res.json(book);
    });
});

router.put('/:id', (req, res) => {
    Book.updateBook(req.params.id, req.body, (err, result) => {
        if(err)
            throw err;
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    Book.deleteBook(req.params.id, (err, result) => {
        if(err)
            throw err;
        res.json(result);
    });
});

module.exports = router;
