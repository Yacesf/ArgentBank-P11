import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: ,
  },
  middleware: [thunk],
});

export default store;