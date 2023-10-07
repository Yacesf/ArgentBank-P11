import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: [thunk],
});

export default store;
