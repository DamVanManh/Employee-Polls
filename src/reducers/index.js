import { combineReducers } from "redux";
import user from "./user";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  user,
  questions,
  users,
});
