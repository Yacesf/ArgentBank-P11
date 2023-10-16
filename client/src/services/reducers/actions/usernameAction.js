import { UPDATE_USERNAME } from "../profileReducer";

export const updateUsername = (newUsername) => ({
  type: UPDATE_USERNAME,
  payload: newUsername,
});