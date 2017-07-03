$(() => { /*jshint ignore:start*/

        $('body').on('click', '.save', function(e) {
            e.preventDefault();


            const title = $('.title').html(),
                movie_id = $('.results').children('.movie_id').attr('data-id');


            const savedMovieData = {

                title: title,
                movie_id: movie_id
            };

            // $('.results').empty();
            console.log(savedMovieData);
            saveMovie(savedMovieData);
        });

        const saveMovie = (savedMovieData) => {
            $.ajax({
                url: 'http://localhost:8080/profile',
                type: 'POST',
                data: {
                    savedMovieData
                },
                success: data => {

                    window.location.replace('movies/profile');

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
