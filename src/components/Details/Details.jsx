import { useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Details(){
    // const history = useHistory();
    const id = useSelector(store => store.movieID);
    const [movie, setMovie] = useState();
    const genre = useSelector(store => store.genres)

    useEffect(() => {
        axios({
            method: 'GET',
            url: `/api/movies/details?id=${id}`
        })
        .then((response) => {
            console.log('response',response);
            setMovie(response)
            console.log(movie);
        })
        .catch((error) => {
            console.log(error);
        })
    })

    return(
        <section>
        <div>
        <h2>Movie Details</h2>
        <p>{movie}</p>
        </div>
        </section>
    )
}


export default Details;