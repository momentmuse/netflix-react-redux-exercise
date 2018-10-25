export const types = {
  POPULATE_MOVIE_LIST: 'POPULATE_MOVIE_LIST',
  TOGGLE_FROM_LIST: 'TOGGLE_FROM_LIST'
};

export const populateMovieList = (list, movies) => ({
  type: types.POPULATE_MOVIE_LIST,
  list,
  movies
});

export const toggleIsInMyList = movie => ({
  type: types.TOGGLE_FROM_LIST,
  movie
});
