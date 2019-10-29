import { createStore, combineReducers, applyMiddleware } from 'redux';
import moviesReducer from '../reducers/moviesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movies: moviesReducer
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
