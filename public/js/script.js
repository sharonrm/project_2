$(() => { /*jshint ignore:start*/

        $('.save').on('click', function(e) {
        	console.log('who got clicked -> ',e.target);
       
            e.preventDefault();

            const children = e.target.parentElement.children,
            	title = children[0].innerText
            	movie_id = e.target.parentElement.children[1].getAttribute('data-id');


            const savedMovieData = {

                "title": title,
                "movie_id": movie_id
            };

            // $('.results').empty();
            console.log(savedMovieData);
            saveMovie(savedMovieData);
        });

        const saveMovie = (savedMovieData) => {
            $.ajax({
                url: '/movies',
                type: 'POST',
                data: savedMovieData,
                success: data => {
                    // window.location.replace('movies/profile');

                    console.log('the result of saved items---->', data);
                },
                error: err => {
                    console.log(err);
                }
            })

        }


        /*jshint ignore:end*/
        ;

    }) //end of jq loader
