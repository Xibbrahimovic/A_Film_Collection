import { useSelector} from 'react-redux';
// import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


function Details(){
    // const history = useHistory();
    const movie = useSelector(store => store.selectedMovie);

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `/api/genre/?id=${movie.id}`
        })
        .then((response) => {
            console.log('response',response);
            setGenres(response.data)
            console.log(movie);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


    console.log(movie);
    console.log('Genres is', genres);

    return(
        <section>
        <div>
        <h2>Movie Details</h2>
        <h3> Genres: {genres.map(genre => genre.name).join(', ')} </h3>
        <h3>{movie.title}</h3>
        <img src={movie.poster}/>
        <p>{movie.description}</p>
        </div>
        </section>
    )
}


export default Details;