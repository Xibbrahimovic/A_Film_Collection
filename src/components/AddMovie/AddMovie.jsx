import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from "@mui/material";
import { Button } from "@mui/material";


function AddMovie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);

  let [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
    genre_id: "",
  });
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  const handleNameChange = (event, property) => {
    console.log("event happened", event);
    setNewMovie({ ...newMovie, [property]: event.target.value });
  };

  const addNewMovie = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    console.log("clicked! added new movie");
  };

  console.log(genres);
  return (
    <form onSubmit={addNewMovie}>
      <div>
        <TextField
          className="textField"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(event) => handleNameChange(event, "title")}
        />
      </div>
      <br></br>
      <div>
        <TextField
          className="textField"
          id="outlined-basic"
          label="Poster (IMG URL)"
          variant="outlined"
          type="text"
          placeholder="Poster (IMG URL)"
          value={newMovie.poster}
          onChange={(event) => handleNameChange(event, "poster")}
        />
      </div>

      <br></br>

      <div>
        <TextField
          className="textField"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(event) => handleNameChange(event, "description")}
        />
      </div>

      <br></br>
    <InputLabel id="demo-simple-select-label">Genre</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={newMovie.genre_id}
        label="Genre"
        onChange={(event) => handleNameChange(event, 'genre_id')}
        >
        {genres.map((genre) => {
            return(
                <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                </MenuItem>
            )})}
    </Select>
      <div>
      <Button 
      sx={{
            margin: 1,
            backgroundColor: "brown",
      }}
      variant="contained"
      type="submit"
      >Add New Movie</Button>
        <br></br>

        <Button 
        sx={{
            backgroundColor: "black"
        }}
        variant="contained"
        onClick={() => {history.push("/");}}>CANCEL</Button>
      </div>
    </form>
  );
}

export default AddMovie;
