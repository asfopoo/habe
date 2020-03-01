import { combineReducers } from "redux";
import usersReducer from "./reducers/getUsersReducer";

const reducer = combineReducers({
  users: usersReducer,
});

export default reducer;
