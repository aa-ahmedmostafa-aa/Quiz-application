import * as UserActionType from "../constants/userConstans";

export const userStart = (name) => (dispatch) => {
  dispatch({
    type: UserActionType.USER_START,
    payload: name,
  });
};
export const userResult = (result) => (dispatch) => {
  dispatch({
    type: UserActionType.USER_RESULT,
    payload: result,
  });
};
