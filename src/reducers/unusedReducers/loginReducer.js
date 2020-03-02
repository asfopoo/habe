import { combineReducers } from "redux";
import {LOGIN_FAILURE} from "../../actions/unusedActions/loginActions";
import {LOGIN_SUCCESS} from "../../actions/unusedActions/loginActions";

let INITIAL_STATE ={
  user:{},
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        //type: LOGIN_SUCCESS,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case LOGIN_FAILURE:
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
  login: loginReducer
});
