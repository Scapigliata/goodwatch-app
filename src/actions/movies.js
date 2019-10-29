export const types = {
  GET_MOVIES: 'GET_MOVIES'
}

export const getMovies = movies => ({
  type: types.GET_MOVIES,
  payload: movies
})
