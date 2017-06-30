$(() => {
        console.log('script loaded')

        const saveTitle = () => {
            $('#save').on('click', e => {
                    e.preventDefault();

                    let t = $('.title').val()
                    console.log('inside SAVE SAVE SAVE SAVE')
                    console.log(t);
                }
                saveTitle(); 
                callSave(movie);

            });

        const callSave = (movie) => {
            $.ajax({
                url: '/movies/search'
                type: 'POST',
                data: {
                    movie.title,
                },
                success: data => {
                    // console.log('this is data for axios call', data);
                    console.log('the reulst of saved items---->', data);

                },
                error: err => {
                    console.log(err);
                }
            })
        }




    }) //end of jq loader
