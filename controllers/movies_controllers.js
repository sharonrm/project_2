const Movies = require('../models/movies')
const express = require('express'),
    router = express(),
    imdb = require('../services/imdb_service');


//VIEW ROUTES


router.get('/new', (req, res) => {
    res.render('movies/movie-search');
})

router.get('/', (req, res) => {
    Movies
        .findByMovieId(req.params.id, req.user.id)
        .then(show => {
            res.render('movies/delete', movie);
        })
        .catch(err => console.log(err));
});

router.post('/search', (req, res) => {
    imdb
        .movieSearch(req.body.movie)
        .then((response) => {
            console.log('inside findImdbID THEN----------->', response.data.results[0].id);
           return imdb.findByMovieId(response.data.results[0].id);
           })
})



module.exports = router;
