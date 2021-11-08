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
        dispatch({type: 'STORE_DETAILS', payload: movie})
        //dispatching movie as an object to the SelectedReducer 
        history.push('/details');
        //navigating to details page
    }

    return(

    <Card sx={{ 
        margin: .3,
        maxWidth: 350 }}>
        <CardActionArea>
        <CardMedia
            //Image of movie.poster is displayed and calls toDetails
            onClick={toDetails}
            component="img"
            height="300"
            image={movie.poster}
            alt={movie.title}
        />
        <CardContent
        onClick={toDetails}//entire card can be triggered with click
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