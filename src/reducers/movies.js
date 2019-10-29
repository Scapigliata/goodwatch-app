import { types } from '../actions/movies'

const moviesReducer = (state = [], { type, payload }) => {

  switch (type) {
    case types.GET_MOVIES:
      console.log('hey', payload)
      return [...state, ...payload];
    default:
      return state;
  }

}

export default moviesReducer;