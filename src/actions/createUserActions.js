import axios from "axios";

const url = "http://localhost:3333";

export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const createUserSuccess = users => {
  return {
    type: CREATE_USER_SUCCESS,
    users
  };
};

export const createUserFailure = error => {
  return {
    type: CREATE_USER_FAILURE,
    error
  };
};

export const createUser = (firstName, lastName, email, username, password, UUID) => {
  let reqBody = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "username": username,
    "password": password,
    "UUID": UUID,
  };

  return dispatch => {
    return axios
      .post(`${url}/users`, reqBody)
      .then(response => {
        return dispatch(createUserSuccess(response.data));
      })
      .catch(error => {
        console.log('err', error.response.data.message);
        return dispatch(createUserFailure(error.response.data));
      });
  };
};
