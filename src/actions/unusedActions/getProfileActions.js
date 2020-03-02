import axios from "axios";
import config from '../../config';

const url = "http://localhost:3333";

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const getProfileSuccess = profile => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  };
};

export const getProfileFailure = error => {
  return {
    type: GET_PROFILE_FAILURE,
    error
  };
};

export const getProfile = (jwt, userId) => {
  let reqBody = {
    "jwt": jwt,
    "userId": userId
  };

  return dispatch => {
    return axios
      .post(`${url}/profile`, reqBody)
      .then(response => {
        return dispatch(getProfileSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(getProfileFailure(error.response.data));
      });
  };
};
