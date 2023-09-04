import { setVotes } from "../actions/questions";

export const SET_QUESTION_TO_USER = "SET_QUESTION_TO_USER";
export const SET_USERS = "SET_USERS";
export const SET_ANSWER_TO_USER = "SET_ANSWER_TO_USER";

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users,
  };
}

export function setAnswerToUser({ user, qid, option }) {
  return {
    type: SET_ANSWER_TO_USER,
    payload: { user, qid, option },
  };
}

export function setQuestionToUser({ id, author }) {
  return {
    type: SET_QUESTION_TO_USER,
    payload: { id, author },
  };
}

export function saveAnswer(authUser, qid, option) {
  return (dispatch) => {
    dispatch(setAnswerToUser(authUser, qid, option));
    dispatch(setVotes(authUser, qid, option));
  };
}
