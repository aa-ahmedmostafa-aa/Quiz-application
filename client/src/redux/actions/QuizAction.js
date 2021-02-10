import * as QuizActionType from "../constants/QuizConstans";
import axios from "axios";

export const getQuestitions = () => async (dispatch) => {
  dispatch({
    type: QuizActionType.QUIZ_REQUEST,
    payload:[]
  });
  try {
    const { data } = await axios.get("http://localhost:5000/api/question");
    dispatch({
      type: QuizActionType.QUIZ_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QuizActionType.QUIZ_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
