import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import profileReducer from "../reducers/profileReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  middleware: [thunk],
});

export default store;
