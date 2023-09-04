import {
  SET_USERS,
  SET_ANSWER_TO_USER,
  SET_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ANSWER_TO_USER:
      const { user, qid, option } = action.payload;
      const currentUser = state[user];
      return {
        ...state,
        [user]: {
          ...currentUser,
          answers: {
            ...currentUser.answers,
            [qid]: option,
          },
        },
      };
    case SET_QUESTION_TO_USER:
      const { id, author } = action.payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id],
        },
      };
    default:
      return state;
  }
}
