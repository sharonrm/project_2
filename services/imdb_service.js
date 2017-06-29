const axios = require('axios');

//to get movie by name and save the movie_id
const movieSearch =()=> {
return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&language=en_US&query=${movie}`)
.then((response)=>{
	console.log('inside movieSearch')
})
};

//to get similiar movies 
const findImdbID = () => {
	return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.KEY}`)
	.then((response)=>{
		console.log('inside MOVIE SERVICES')
		return response;
	})
	.catch((error)=>{
		console.log('error in MOVIE SERVICES');
		console.log(error);
	})
}

module.exports = { findImdbID }