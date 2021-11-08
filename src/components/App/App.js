import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import AddMovie from "../AddMovie/AddMovie";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/material";


function App() {
  return (

      <div className="App">
        <Router>
          <Link to="/">
            <Button
              sx={{
                margin: 1,
                backgroundColor: "brown",
              }}
              variant="contained"
            >
              Home
            </Button>
          </Link>
          <h1>The Movies Saga!</h1>

          <Container>
          <Route path="/" exact>
            <Link to="/addMovie">
              <Button
                sx={{
                  backgroundColor: "brown",
                }}
                variant="contained"
                endIcon={<AddIcon />}
              >
                Add New Movie
              </Button>
            </Link>
            <MovieList />
          </Route>
          </Container>

          <Route path="/details">
            <h1>DETAILS</h1>
            <Details />
          </Route>

          <Route path="/addMovie">
            <h1>Add a new movie here!</h1>
            <AddMovie />
          </Route>
        </Router>
      </div>
  );
}

export default App;
