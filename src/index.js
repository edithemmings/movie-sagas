import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMoviesSaga)
    yield takeEvery('GET_SELECTED_MOVIE', getSelectedMovieSaga)
}
function* getMoviesSaga(){
    try {
        const response = yield Axios.get('/movies')
        yield put ({type: 'SET_MOVIES', payload: response.data})
    } catch(error) {
        console.log('error in get movie saga', error)
    }
}
function* getSelectedMovieSaga(action){
    try{
        const response = yield Axios.get('/movies/' + action.payload.id)
        yield put({type: 'MOVIE_DETAILS', payload: response.data})
    } catch(error){
        console.log('error in get selected movie saga', error)
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
// Used to store movies returned from the server
const movieDetails = (state = [{
        title: '',
        poster: '',
        description: '',
        name: ''
    }], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'MOVIE_DETAILS':
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

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
