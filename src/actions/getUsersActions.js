import axios from "axios";
import config from '../config';

const url = "http://localhost:3333";

export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const usersSuccess = users => {
  return {
    type: USERS_SUCCESS,
    users
  };
};

export const usersFailure = error => {
  return {
    type: USERS_FAILURE,
    error
  };
};

export const getUsers = () => {
  let reqBody = {
    "UUID": config.UUID,
  };

  return dispatch => {
    return axios
      .post(`${url}/users`, reqBody)
      .then(response => {
        return dispatch(usersSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(usersFailure(error.response.data));
      });
  };
};
