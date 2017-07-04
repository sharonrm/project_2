const Movies = require('../models/movies')
const express = require('express'),
    router = express(),
    imdb = require('../services/imdb_service');


//VIEW ROUTES

// show single movie



router.get('/new', (req, res) => {
    res.render('movies/movie-search');
})

//delete router
router.delete('/:id/', (req, res) => {
    console.log(req.params.id);
    Movies
        .deleteById(req.params.id)
        .then(data => {
            res.send(data)
                // res.redirect('movies/saved')

        }).catch(err => console.log(err));
})



// to add to a new comment
// router.post('/', (req, res) => {
//     Movies
//     .createNotes(req.body.id, req.body.notes)
//     console.log('from inside post--->', req.body.id, req.body.notes)
//     .then(data => res.json(data))
//     .catch(err => console.log(err));
// });

// //to edit comment
// router.put('/:id', (req,res)=>{
//     Movies
//     .update(req.body.id, req.body.comment)
//     .then(data=>res.json(data))
//     .catch(err=>console.log(err))
// });

//save favorite routes
router.get('/saved', (req, res) => {
    Movies
        .getAllFavoritesByUser(req.user.id)
        .then(data => {
            // console.log('the data from movies by id  ->', data);
            res.render('movies/saved-movies.html', { data });
        })
        .catch(err => console.log(err));
})

//route connected to axios call
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
                    res.render('movies/movie-search', { movies: movies.data.results });

                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});




// to save movies
router.post('/', (req, res) => {
    console.log('creating a new fav movie controller ', req.body.title, req.body.movie_id, req.user);
    // res.send(req.body);
    Movies
        .addFavoriteMovie(req.body, req.user.id)
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

//SAVE one
router.get('/:id/', (req, res) => {
    console.log('from single movie ---->',req.params);
    
    Movies
        .findById(req.params.id)
        .then(data => {
            res.render('movies/movie', {data});
        }).catch(err=>console.log(err));
})







module.exports = router;
