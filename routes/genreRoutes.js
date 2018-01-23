var router = require('express').Router();
var Genre = require('../models/genre');

router.get('/', (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err)
            throw err;
        res.json(genres);
    });
});

router.post('/', (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err)
            throw err;
        res.json(genre);
    });
});

router.put('/:id', (req, res) => {
    Genre.updateGenre(req.params.id, req.body, (err, result) => {
        if(err)
            throw err;
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    Genre.deleteGenre(req.params.id, (err, genre) => {
        if(err)
            throw err;
        res.json(genre);
    });
});

module.exports = router;
