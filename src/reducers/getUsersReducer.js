import { combineReducers } from "redux";
import {USERS_FAILURE} from "../actions/getUsersActions";
import {USERS_SUCCESS} from "../actions/getUsersActions";

let INITIAL_STATE ={
  users:[],
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const getUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Take all returned user info and put it in store
    case USERS_SUCCESS:
      return {
        ...state,
        //type: USERS_SUCCESS,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorResponse: true,
        errorMessage: action.error
      };
    // Don't think this gets called
    default:
      return state;
  }
};

export default combineReducers({
  users: getUsersReducer
});
