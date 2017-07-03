const Movies = require('../models/movies')
const express = require('express'),
    router = express(),
    imdb = require('../services/imdb_service');


//VIEW ROUTES


router.get('/new', (req, res) => {
    res.render('movies/movie-search');
})

router.post('/search', (req, res) => {
    console.log(req.body.movie);
    // going to get the id of movie with the name from the user
    imdb.movieSearch(req.body.movie)
        .then((response) => {
            // response holds the id, we use it to find similar movies
            // console.log('inside findImdbID THEN----------->', response.data.results[0].id);
            imdb.findByMovieId(response.data.results[0].id)
                .then(movies => {
                    // console.log('inside imdb.findByMovieId', movies.data.results)
                    // now we have all those similar movies
                    // lets parse it now and then render it
                    // let parsedMovies = imdb.parsedSimiliarMovies(movies);
                    // console.log('the result of the movie search --> ', parsedMovies);
                    //now we have the movies, lets render them
                    res.render('movies/movie-search', {movies: movies.data.results});

                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

router.post('/profile', (req, res) => {
    Movies
    .favoriteMovie(req.body.data)
    .then(data => res.json(data))
    // console.log(req.params.id, req.user.id)
    // imdb
    // .

   res.render('movies/saved-movies');
    })
  




module.exports = router;
