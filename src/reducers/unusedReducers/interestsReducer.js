import { combineReducers } from "redux";
import {GET_INTERESTS_FAILURE} from "../../actions/unusedActions/getInterestsActions";
import {GET_INTERESTS_SUCCESS} from "../../actions/unusedActions/getInterestsActions";

let INITIAL_STATE ={
  interest: {},
  isloading: false,
  errorResponse: false,
  errorMessage: null,
};

const getInterestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Take all returned info and put it in store
    case GET_INTERESTS_SUCCESS:
      return {
        ...state,
        //type: GET_INTEREST_SUCCESS,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case GET_INTERESTS_FAILURE:
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
  interest: getInterestsReducer
});
