const db = require('../models/setup.js');

const favoriteMovie = (userId) => {
	return db.oneOrNone(`INSERT INTO movies (title, movie_id) values ($1, $2) RETURNING *`, [movie.title, movie.movie_id]);
}



module.exports = { favoriteMovie };