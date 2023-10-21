import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
};

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    receiveFirstName: (state, action) => {
      state.firstName = action.payload
    },
    receiveLastName: (state, action) => {
      state.lastName = action.payload
    },
    receiveUserName: (state, action) => {
      state.userName = action.payload
    }
  }
})

export const {
  receiveFirstName,
  receiveLastName,
  receiveUserName
} = profileReducer.actions

export default profileReducer.reducer
