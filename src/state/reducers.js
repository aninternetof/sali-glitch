import { combineReducers } from 'redux';

import {
  SEARCH_PENDING,
  SEARCH_FULFILLED,
  SEARCH_REJECTED,
} from './actions';

function searchResults(
  state = {
    searchResults: null,
    isFetching: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case SEARCH_FULFILLED:
      return {
        ...state,
        isFetching: false,
        rovers: action.payload,
        error: null,
      };
    case SEARCH_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  searchResults,
});

