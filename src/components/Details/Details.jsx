import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { spacing } from '@mui/system';



function Details(){
    //Store access to selectedMovie
    const movie = useSelector(store => store.selectedMovie);
    //Local state to store genres from GET request
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `/api/genre/?id=${movie.id}`
            //fetches specific genres from ID
        })
        .then((response) => {
            console.log('response',response);
            //sets response.data: (All genres on this movie) to local state
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
    <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: '' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            backgroundColor: 'tan'
            }}>
    <Box 
        component="text"
        sx={{ color: 'black', fontSize: 16, mx: "auto", width: 200 , mt: 1}}>
        Genres: {genres.map(genre => genre.name).join(', ')}
        {/* Using local state, we might through the array of genres on selectedMovie and creates a string of them joinED by a ',' */}
    </Box>
    <Paper
        elevation={3}
        component="img"
        sx={{
            margin: 2,
            height: 300,
            width: 215,
            maxHeight: { xs: 450, md: 750 },
            maxWidth: { xs: 325, md: 500 },
        }}
        alt={movie.title}
        src={movie.poster}
    />
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
        }}
        >

    <Box
        sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: 'tan',
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
                fontSize: 21,
                mr: 0.5,
            },
        }}>
    <Box 
        component="span" 
        sx={{ 
            maxWidth: 700, 
            color: 'black', 
            fontSize: 16, 
            backgroundColor: "white", 
            borderRadius: '10px',
        }}
            >
            {movie.description}
    </Box>
    </Box>
    </Box>
    </Box>
    )
}


export default Details;