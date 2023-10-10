import { RECEIVE_PROFILE } from "../profileReducer";

export const receiveProfile = (profileData) => ({
  type: RECEIVE_PROFILE,
  payload: profileData,
})