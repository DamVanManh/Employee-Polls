import { setQuestionToUser } from "./users";
import { _saveQuestion } from "../utils/_DATA";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_VOTES = "SET_VOTES";
export const SET_QUESTION = "SET_QUESTION";

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
}

function setQuestion(question) {
  return {
    type: SET_QUESTION,
    payload: question,
  };
}

export function setVotes({ user, qid, option }) {
  return {
    type: SET_VOTES,
    payload: { user, qid, option },
  };
}

export function createNewQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((question) => {
      dispatch(setQuestionToUser(question));
      dispatch(setQuestion(question));
    });
  };
}
