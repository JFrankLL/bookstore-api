var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
    name: { type: String, required: true },
    create_date: { type: Date, default: Date.now }
}, { versionKey: false });

var Genre = module.exports = mongoose.model('genres', genreSchema);

// Get Genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
};

// Add Genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
};

// Update Genre
module.exports.updateGenre = (id, body, callback) => {
    Genre.update({ _id: id }, body, {}, callback);
};

// Delete Genre
module.exports.deleteGenre = (id, callback) => {
    Genre.remove({ _id: id }, callback);
};
