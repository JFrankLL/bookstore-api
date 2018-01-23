var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String },
    author: { type: String, required: true },
    publisher: { type: String },
    pages: { type: String },
    image_url: { type: String },
    buy_url: { type: String },
    create_date: { type: Date, default: Date.now }
}, { versionKey: false });

var Book = module.exports = mongoose.model('books', bookSchema);

// Get books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
};

// Get book
module.exports.getBookById = (book, callback) => {
    Book.findById(book, callback);
};

// Add Book
module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
};

// Update Book
module.exports.updateBook = (id, body, callback) => {
    Book.update({ _id: id }, body, {}, callback);
};

// Delete Book
module.exports.deleteBook = (id, callback) => {
    Book.remove({ _id: id }, callback);
};
