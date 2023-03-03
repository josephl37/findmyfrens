import { combineReducers } from "redux";
import UserReducer from "./reducer-user"

const rootReducer = combineReducers({
  info: UserReducer,
});

export default rootReducer;
