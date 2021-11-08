import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



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
        // <div>
        // <h3>{movie.title}</h3>
        // <img 
        // onClick={toDetails}
        // src={movie.poster} 
        // alt={movie.title}/>
        // </div>

    <Card sx={{ 
        margin: .3,
        maxWidth: 400 }}>
        <CardActionArea>
        <CardMedia
            onClick={toDetails}
            component="img"
            height="450"
            image={movie.poster}
            alt={movie.title}
        />
        <CardContent
        onClick={toDetails}
        >
            <Typography gutterBottom variant="h5" component="div">
            {movie.title}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    )
}

export default MovieItem;