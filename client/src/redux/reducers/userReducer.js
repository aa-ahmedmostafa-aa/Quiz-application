import * as UserActionType from "../constants/userConstans";

export const userReducer = (state = { name:'',result:''}, action) => {
  switch (action.type) {
    case UserActionType.USER_START:
      return {
        name: action.payload,
      };
      case UserActionType.USER_RESULT:
        return {
           ...state , result: action.payload
        }

    default:
      return state;
  }
};
