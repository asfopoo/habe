import axios from "axios";
import config from '../../config';

const url = "http://localhost:3333";

export const GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS";
export const GET_INTERESTS_FAILURE = "GET_INTERESTS_FAILURE";

export const getInterestsSuccess = interests => {
  return {
    type: GET_INTERESTS_SUCCESS,
    interests
  };
};

export const getInterestsFailure = error => {
  return {
    type: GET_INTERESTS_FAILURE,
    error
  };
};

export const getInterests = (jwt, userId) => {
  let reqBody = {
    "jwt": jwt,
    "userId": userId
  };

  return dispatch => {
    return axios
      .post(`${url}/interests`, reqBody)
      .then(response => {
        return dispatch(getInterestsSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(getInterestsFailure(error.response.data));
      });
  };
};
