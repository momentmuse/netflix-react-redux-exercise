export const types = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
  GET_DISCOVER_MOVIES: 'GET_DISCOVER_MOVIES'
};

export const getDiscoverMovies = movies => ({
  type: types.GET_DISCOVER_MOVIES,
  movies
});

export const addMovie = movie => ({
  type: types.ADD_MOVIE,
  movie
});

export const removeMovie = id => ({
  type: types.REMOVE_MOVIE,
  id
});
