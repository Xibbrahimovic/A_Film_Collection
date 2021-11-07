import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function MovieItem({movie}){
    const dispatch = useDispatch();
    const history = useHistory(); 

    const toDetails = () => {
        dispatch({type: 'ADD_ID', payload: movie})
        //dispatching id to movieID reducer 
        history.push('/details');
        //navigating to details page
    }

    return(
        <div>
        <h3>{movie.title}</h3>
        <img 
        onClick={toDetails}
        src={movie.poster} 
        alt={movie.title}/>
        </div>
    )
}

export default MovieItem;