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
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '30px',
            boxShadow: 1,
            fontWeight: 'bold',
            backgroundColor: 'tan',
            }}>
    <Box //Title and Genre Parent Box
        sx={{
            ml: 55,
        }
        }
    >
    <Box //Movie Title
        sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: ''},
            alightItems: 'center',
            bgcolor: 'white',
            overflow: 'hidden',
            width: 400,
            border: 1,
            borderColor: 'white',
            borderRadius: '8px',
            boxShadow: 1.5, 
            fontSize: 22,
            fontWeight: 'bold',
            mt: 4.5,
        }}>{movie.title}
    </Box>    
    <Box>
        <Box
            sx={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                mr: 77,
                mt: 2,
                mb: .5,

            }}
        >
            Genre(s):
        </Box>
    <Box 
        component="text"
        sx={{ 
            color: 'black', 
            fontSize: 13, 
            pt: 30,
            mr: 55, 
            width: 200 , 
            }}>
        {genres.map(genre => genre.name).join(', ')}
        {/* Using local state, we might through the array of genres on selectedMovie and creates a string of them joinED by a ',' */}
    </Box>
    </Box>
    </Box>

    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
            mx: 1,
        }}
        >

    <Box
        sx={{
            mt: 1.5,
            mx: 25,
            p: 0.5,
            backgroundColor: 'tan',
            border: 2,
            borderColor: "tan",
            boxShadow: 3,
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            maxWidth: 1000,
            alignItems: 'center',
            '& svg': {
                fontSize: 21,
                mr: 0.5,
            },
        }}
    >
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
        component="span" 
        sx={{ 
            height: 300,
            maxWidth: 500, 
            color: 'black', 
            fontSize: 14, 
            backgroundColor: "white", 
            borderRadius: '10px',
            mr:3,
        }}
            >
            <Box
                sx={{
                    textAlign: 'center',
                    mx: 4,
                    my: 5,
                }}>
            {movie.description}
            </Box>
    </Box>
    </Box>
    </Box>
    </Box>
    )
}


export default Details;