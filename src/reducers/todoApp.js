import {todos,visibilityFilter} from "./todos";
import {combineReducers} from "redux";

export const todoApp = combineReducers({
  todos  ,
  visibilityFilter
});