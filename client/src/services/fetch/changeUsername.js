// import { updateUsername } from "../reducers/actions/usernameAction";

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
    console.log("Fetch response:", response);
    if (response.ok) {
      const data = await response.json();
      // dispatch(updateUsername(newUsername))
      return data
    }
  } catch (error) {
    console.error(error);
  }
}