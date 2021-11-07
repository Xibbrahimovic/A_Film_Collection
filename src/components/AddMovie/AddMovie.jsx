import { useDispatch } from "react-redux";

import { useState } from "react";

function AddMovie(){
    // const history = useHistory();
    const dispatch = useDispatch();

    let [newMovie, setNewMovie] = useState({
    title: '',
    poster:'',
    description: '',
    genre_id: ''
});

    const handleNameChange = (event, property) => {
        console.log('event happened', event);
        setNewMovie({...newMovie, [property]: event.target.value
        })
    }

    const addNewMovie = event => {
        event.preventDefault();
        dispatch({type: 'ADD_MOVIE', payload: newMovie})
    }
    return(
        <form>

        <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(event) => handleNameChange(event, 'title')}/>

        <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(event) => handleNameChange(event, 'description')}/>
        </form>

    )

}



export default AddMovie;