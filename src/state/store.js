import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer: reducers,
});
