import { combineReducers } from 'redux';
import { types } from '../actions/index.actions';

const initialState = {
  // have to set discover list to a fetch call?
  // make fetch call on componentDidMount
  discoverMovies: [],
  myMovies: []
};

const discoverList = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DISCOVER_MOVIES:
      return {
        ...state,
        discoverMovies: action.movies
      };
    default:
      return state;
  }
};

const myList = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return {
        ...state,
        myMovies: [...state.myMovies, action.movie]
      };
    case types.REMOVE_MOVIE:
      return {
        ...state,
        myMovies: state.myMovies.filter(movie => movie.id !== action.id)
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  discoverList,
  myList
});

export default reducers;
