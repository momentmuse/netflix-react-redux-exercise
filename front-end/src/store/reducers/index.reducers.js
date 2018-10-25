import { types } from '../actions/index.actions';

const initialState = {
  discoverList: [],
  myListIDs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_MOVIE_LIST:
      // console.log('hi!', action.list, action.movies);
      return {
        ...state,
        [action.list]: action.movies
      };
    case types.TOGGLE_FROM_LIST:
      return;
    default:
      return state;
  }
};

export default reducer;
