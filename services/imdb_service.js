const axios = require('axios');



//to get movie by name and save the movie_id
const movieSearch = (movie) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&language=en_US&query=${movie}`)

};

//to get similiar movies 
const findByMovieId = (movie_id) => {

    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.KEY}`)
    
}


module.exports = { findByMovieId, movieSearch }
