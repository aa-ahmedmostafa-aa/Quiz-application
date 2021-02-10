import { combineReducers } from "redux";
import { QuizReducer } from "./QuizReducer";
import {userReducer} from './userReducer';
export default combineReducers({
  allQuestions: QuizReducer,
  user: userReducer
});
