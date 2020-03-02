import axios from "axios";
import config from '../config';

const url = "http://localhost:3333";

export const USER_SUCCESS = "USERS_SUCCESS";
export const USER_FAILURE = "USERS_FAILURE";

export const userSuccess = user => {
  return {
    type: USER_SUCCESS,
    user
  };
};

export const userFailure = error => {
  return {
    type: USER_FAILURE,
    error
  };
};

export const getUser = (jwt, userId) => {
  let reqBody = {
    "jwt": jwt,
    "userId": userId
  };

  return dispatch => {
    return axios
      .post(`${url}/users`, reqBody)
      .then(response => {
        return dispatch(userSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(userFailure(error.response.data));
      });
  };
};
