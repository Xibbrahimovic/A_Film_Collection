import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

//adds new movie to server
function* addMovie(action){
    try {
        console.log('Add movie log', action.payload);
        //activate POST request
        //action.payload holds newMovieObject
        yield axios.post('/api/movie', action.payload);
        //repopulates array of movies on DOM
        yield put ({type: 'FETCH_MOVIES'});
    } catch (error) {
        console.log('error in POST', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre/all');
        console.log('get all:', genres.data);
        //waits to set list of genres to reducer
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get genres error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//movie object stored to give access in Details view
const selectedMovie = (state = {}, action) =>{
    switch (action.type){
        case 'STORE_DETAILS':
            return action.payload;
        default:
            return state; 
    }
}

            //STORE//
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
