import axios from "axios";


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
  /*let reqBody = {
    "UUID": config.UUID,
    "name": sensor,
    "override": setting
  };*/


  return dispatch => {
    return axios
      .get(`${url}/users`)
      .then(response => {
        console.log('success', JSON.stringify(response));
        dispatch(usersSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        dispatch(usersFailure(error.response.data));
      });
  };
};
