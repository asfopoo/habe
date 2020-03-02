import { combineReducers } from "redux";
import {USER_FAILURE} from "../../actions/unusedActions/userActions";
import {USER_SUCCESS} from "../../actions/unusedActions/userActions";

let INITIAL_STATE ={
  user:{},
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Take all returned user info and put it in store
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case USER_FAILURE:
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
  user: userReducer
});
