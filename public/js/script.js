$(()=>{
console.log('script loaded')

let currentInput = '';
//get search input

$('#search').on('submit', (e) => {
	e.preventDefault();
	const movie = $('#search-input').val();
	callSearch(movie);
	// movieSearch(movieSearchData);
});

const callSearch=(movie)=>{
	$.ajax({
		url:'http://localhost:8080/movies/search',
		type: 'POST',
		data: {
			movie
		},
		success: data => {
			// console.log('this is data for axios call', data);

		},
		error: err => {
			console.log(err);
		}
	})
}

})//end of jq loader