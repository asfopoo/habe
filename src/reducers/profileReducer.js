import { combineReducers } from "redux";
import {GET_PROFILE_FAILURE} from "../actions/getProfileActions";
import {GET_PROFILE_SUCCESS} from "../actions/getProfileActions";

let INITIAL_STATE ={
  profile:{},
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const getProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        //type: PROFILE_SUCCESS,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case GET_PROFILE_FAILURE:
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
  profile: getProfileReducer
});
