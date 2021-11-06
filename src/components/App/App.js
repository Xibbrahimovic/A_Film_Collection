import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path='/details'>
        <h1>DETAILS</h1>
          <Details/>
        </Route>
        {/* Details page */}

        {/* <Route path='/addMovie'>
          <h1>ADD MOVIE PAGE</h1>
          <AddMovie/>
        </Route> */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
