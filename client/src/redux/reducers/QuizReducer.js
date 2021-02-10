import * as QuizActionType from "../constants/QuizConstans";

export const QuizReducer = (state = { },action) => {
  switch (action.type) {
    case QuizActionType.QUIZ_REQUEST:
      return {
        loading: true,
      };
    case QuizActionType.QUIZ_SUCCESS:
      return {
        loading: false,
        questions: action.payload,
      };
    case QuizActionType.QUIZ_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
