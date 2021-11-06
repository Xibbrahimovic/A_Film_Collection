import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function MovieItem({movie}){
    const dispatch = useDispatch();
    const history = useHistory(); 

    const toDetails = () => {
        dispatch({type: 'ADD_ID', payload: movie.id})
        history.push('/details');
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