import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import profileReducer from "../reducers/profileReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
  middleware: [thunk],
});

export default store;
