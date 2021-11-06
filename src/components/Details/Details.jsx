import { useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';

function Details(){
    const history = useHistory();
    const id = useSelector((store) = store.details;

    useEffect((id) => {
        axios.get(`api/movies/details/${id}`)
        .then({

        })
    })

    return(
        <div>
        <h2>Movie Details</h2>
        </div>
    )
}


export default Details;