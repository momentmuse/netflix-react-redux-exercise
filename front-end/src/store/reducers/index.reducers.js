import { types } from '../actions/index.actions';
// import { combineReducers } from 'redux';

// function unique(array) {
//   return [...new Set(array)];
// }

const initialState = {
  discoverList: [],
  myListIDs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_MOVIE_LIST:
      return {
        ...state,
        [action.list]: action.movies
      };
    case types.TOGGLE_FROM_LIST:
      return {
        ...state,
        myListIDs: state.myListIDs.includes(action.id)
          ? state.myListIDs.filter(id => id !== action.id)
          : [action.id, ...state.myListIDs]
      };
    default:
      return state;
  }
};

export default reducer;

// function discoverListReducer(state = [], action) {
//   switch (action.type) {
//     case types.POPULATE_MOVIE_LIST:
//     return [...action.movies]
//     default:
//     return state;
//   }
// }

// function myListIDsReducer(state = [], action) {
//   switch (action.type) {
//     case types.TOGGLE_FROM_LIST:
//     return unique([...state, action.id])
//     default:
//     return state;
//   }
// }

//  const rootReducer = combineReducers({
//   discoverList: discoverListReducer,
//   myListIDs: myListIDsReducer
// })

// export default rootReducer;
