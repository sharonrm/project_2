const db = require('../models/setup.js');

const addFavoriteMovie = (movieInfo, userId) => {
	return db.oneOrNone(`INSERT INTO movies (title, movie_id, user_id) values ($1, $2, $3) RETURNING *`, [movieInfo.title, movieInfo.movie_id, userId]);
}

const getAllFavoritesByUser =(user_id) => {
	return db.any('SELECT * FROM movies WHERE user_id = $1', [user_id]);
}

const deleteById = (movie_id) => {
	return db.oneOrNone('DELETE FROM movies WHERE movie_id = $1', [movie_id]);
}

const createNotes = (notes) => {
return db.one('INSERT INTO movies (notes, movie_id) VALUES ($1, $2) RETURNING *', [notes.notes, notes.movie_id]);
}

const update = (notes) => {
	return db.one('UPDATE movie SET movie_id =$1, comment = $2 WHERE id = $3  returning id,' [movie_id, comment, id])
}

const findById =(id) => {
	return db.one('SELECT * FROM movies WHERE id = $1', [id]);
}



module.exports = { addFavoriteMovie, getAllFavoritesByUser, deleteById, createNotes, update, findById };
