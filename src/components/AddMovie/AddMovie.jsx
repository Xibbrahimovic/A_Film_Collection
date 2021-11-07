import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

function AddMovie(){
    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    let [newMovie, setNewMovie] = useState({
    title: '',
    poster:'',
    description: '',
    genre_id: ''
});
    useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const handleNameChange = (event, property) => {
        console.log('event happened', event);
        setNewMovie({...newMovie, [property]: event.target.value
        })
    }

    const addNewMovie = event => {
        event.preventDefault();
        dispatch({type: 'ADD_MOVIE', payload: newMovie})
        console.log('clicked! added new movie');
    }
    
    console.log(genres);
    return(
        <form onSubmit={addNewMovie}>
        <div>
        <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(event) => handleNameChange(event, 'title')}/>
        </div>
        <br>
        </br>
        <div>
        <input
        type="text"
        placeholder="Poster (IMG URL)"
        value={newMovie.poster}
        onChange={(event) => handleNameChange(event, 'poster')}/>
        </div>

        <br>
        </br>

        <div>
        <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(event) => handleNameChange(event, 'description')}/>
        </div>

        <br>
        </br>

        <select 
        value={newMovie.genre_id}
        onChange={(event) => handleNameChange(event, 'genre_id')}>

        <br>
        </br>
        
        <option disabled value ='0'>
            Genres
        </option>
        {genres.map((genre) => {
            return(
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            )
        })}

        </select>
        <button type="submit">Add New Movie</button>
        <div>

        <br>
        </br>
        
        <button onClick={() => {history.push('/')}}>CANCEL</button>
        </div>
        </form>

        

        

    )
    

}



export default AddMovie;