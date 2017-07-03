const db = require('../models/setup.js');

const addFavoriteMovie = (movieInfo, userId) => {
	return db.oneOrNone(`INSERT INTO movies (title, movie_id, user_id) values ($1, $2, $3) RETURNING *`, [movieInfo.title, movieInfo.movie_id, userId]);
}

const getAllFavoritesByUser =(user_id) => {
	return db.any(`SELECT * FROM movies WHERE user_id = )
}


module.exports = { addFavoriteMovie };