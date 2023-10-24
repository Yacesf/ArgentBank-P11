import { receiveUserName } from "../reducers/profileReducer";

export const fetchChangeUsername = (newUsername) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUsername }),
    });
    if(response.ok) {
      dispatch(receiveUserName(newUsername))
    }
    console.log("Fetch response:", response);
  } catch (error) {
    console.error(error);
  }
}