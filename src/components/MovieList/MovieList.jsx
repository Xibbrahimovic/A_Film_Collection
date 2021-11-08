import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';
import { ImageList } from '@mui/material';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <h1>Movie List</h1>
            <ImageList sx={{}} cols={3} rowHeight={500}>
            {movies.map(movie => {
                    return (
                        <MovieItem
                        key={movie.id}
                        movie={movie}
                        />
                    )})}
            </ImageList>
            </>
    )
    
}

export default MovieList;