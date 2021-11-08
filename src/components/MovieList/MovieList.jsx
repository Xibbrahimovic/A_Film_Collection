import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';
import { ImageList } from '@mui/material';


function MovieList() {

    const dispatch = useDispatch();
    //grabs movies from store
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        //populates DOM on render
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <h1>Movie List</h1>
            <ImageList 
                sx={{
                    mt: 1,
                    m: 7.5,
                }} 
                cols={4} 
                rowHeight={400}>
            {/* Maps through movie reducer and returns every one */}
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