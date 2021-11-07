import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  return (
    <>
    <div className="App">
    <Router>
    <nav>
      <Link to="/addMovie">Add Movie</Link>
      <br/>
      <Link to="/">Home</Link>
    </nav>
      <h1>The Movies Saga!</h1>
            
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path='/details'>
        <h1>DETAILS</h1>
          <Details/>
        </Route>


        <Route path='/addMovie'>
          <h1>ADD MOVIE PAGE</h1>
          <AddMovie/>
        </Route>

      </Router>
    </div>
    </>
  );
}


export default App;
