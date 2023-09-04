import { SET_QUESTIONS, SET_VOTES, SET_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_VOTES:
      const { user, qid, option } = action.payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [option]: {
            ...state[qid][option],
            votes: [...state[qid][option].votes, user],
          },
        },
      };
    case SET_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}
