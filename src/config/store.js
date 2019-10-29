import { createStore, combineReducers, applyMiddleware } from 'redux';
import movies from '../reducers/movies';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movies
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
