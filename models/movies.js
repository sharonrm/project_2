const db = require('../models/setup.js');

const findAllByUser = (userId) => {
	return db.any('SELECT * FROM movies WHERE user_id = $1', [userID]);
}

const findById = (movieId, userId) => {
	return db.oneOrNone('SELECT * FROM movies WHERE id = $1 AND user_id = $2',
  [movie_id, userId]);
}

const create = (movie, userID) => {
	return db.one(`INSERT INTO movies 
		(title, movie_id, user_id)RETURNING *`,
		[movie.title, movie.movie_id, user_id]);
}

const destroy = (movieId, userId) => {
	return db.none(`DELETE FROM movies WHERE movie_id = $1 AND user_id = $2`),
	[movieId, userID]
}

module.exports ={ findAllByUser, findById, create, destroy }
