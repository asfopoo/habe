import { combineReducers } from "redux";
import {CREATE_USER_FAILURE} from "../actions/createUserActions";
import {CREATE_USER_SUCCESS} from "../actions/createUserActions";

let INITIAL_STATE ={
  user: {},
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const createUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Take all returned info and put it in store
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorResponse: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  createUser: createUserReducer
});
