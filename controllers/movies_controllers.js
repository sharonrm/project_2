const Movies = require('../models/movies')
const express = require('express'),
	  router = express(),
	  imdb = require('../services/imdb_service');


//VIEW ROUTES


router.get('/new',(req,res) =>{
	res.render('movies/new');
})

router.get('/:id', (req,res)=> {
	Movies
	.findImdbID(req.params.id, req.user.id)
	.then(show =>{
		res.render('movies/delete', movie);
	})
	.catch(err => console.log(err));
});

router.get('/', (req,res) => {
	imdb
		.findImdbID()
		.then((imdbData) => {
			console.log('inside findImdbID THEN');
			console.log(imdbData);
			return 
		})
})



module.exports = router;
