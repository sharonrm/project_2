$(() => { /*jshint ignore:start*/

        $('.save').on('click', function(e) {
            console.log('who got clicked -> ', e.target);

            e.preventDefault();

              let children = e.target.parentElement.children,
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


                    console.log('the result of saved items---->', data);
                },
                error: err => {
                    console.log(err);
                }
            })

        };

        $('.deleteBtn').on('click', function(e) {
            // console.log('movie to delete --->', e.target.id)
            e.preventDefault();

            const getId = e.target.id;
            // console.log(getId);
            deleteSingleMovie(getId);
        })


        const deleteSingleMovie = (getId) => {
            // console.log(getId);

            $.ajax({
                url: `/movies/:${getId}`,
                type: 'DELETE',
                success: data => {
                    window.location.replace('movies/saved-movies');
                },
                error: err => {
                    console.log(err);
                }
            })

        }



        /*jshint ignore:end*/


    }) //end of jq loader
