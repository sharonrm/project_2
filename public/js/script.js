$(() => { /*jshint ignore:start*/

        //getting data to save to favorites
        $('.save').on('click', function(e) {

            // console.log('who got clicked -> ', e.target);

            e.preventDefault();


            let children = e.target.parentElement.children,
                title = children[0].innerText,
                movie_id = e.target.parentElement.children[1].getAttribute('data-id'),
                summary = e.target.parentElement.children[2].innerHTML;



            const savedMovieData = {

                "title": title,
                "movie_id": movie_id,
                'summary': summary

            };

            // console.log(savedMovieData);
            saveMovie(savedMovieData);

            //ajax call to save data
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
                url: `/movies/${getId}`,
                type: 'DELETE',
                success: data => {
                    console.log('return from ajax------>', data)
                    window.location.reload();
                },
                error: err => {
                    console.log(err);
                }
            })

        }


        //listen for new note
        $('.add-comment').on('submit', function(e) {
            console.log('who got clicked -> ', e.target);
            e.preventDefault();

            //get notes from form
            const comment = $('.movie-comment').val();
            const movie_id = e.target.parentElement.children[0].getAttribute('data-id');

            //new object to sent form comment
            const savedComment = { 'comment': comment, 'movie_id': movie_id };
            console.log(savedComment);
            //ajax call to create new comment
            $.ajax({
                method: 'POST',
                url: '/movies',
                data: savedComment,
                success: response => {
                    console.log('this is the response', response);
                    window.location.replace('/movies/' + response.id);
                },
                error: err => {
                    console.log(err);
                }
            })
        })


        /*jshint ignore:end*/


    }) //end of jq loader
