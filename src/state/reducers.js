import { combineReducers } from "redux";
import actions from "./actions";



const initialState = {
  initial: false, // initial onboarding is not shown yet
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TEST: {
      const newState = { a: 1 };
      console.log('!!!!!!!', newState);
      return newState;
    }
    default:
      return state;
  }
};

export {
  settings
};

