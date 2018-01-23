const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const genresRoutes = require('./routes/genreRoutes');
const booksRoutes = require('./routes/bookRoutes');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

module.exports = () => {
    app.use(bodyParser.json());

    app.get('/', (req, res) => res.send('Please use /api/genre'));

    app.use('/api/genres', genresRoutes);
    app.use('/api/books', booksRoutes);

    return app;
};

