import { SET_USER } from "../actions/user";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
