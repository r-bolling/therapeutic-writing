import { combineReducers } from "redux";
import { journalReducer } from "./journal-reduce";
import { authReducer } from "./auth";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  entries: journalReducer,
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;
