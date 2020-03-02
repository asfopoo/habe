import axios from "axios";

const url = "http://localhost:3333";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const login = (UUID, username, password) => {
  let reqBody = {
    "UUID": UUID,
    "username": username,
    "password": password
  };

  return dispatch => {
    return axios
      .post(`${url}/login`, reqBody)
      .then(response => {
        return dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(loginFailure(error.response.data));
      });
  };
};
