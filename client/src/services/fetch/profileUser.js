import { receiveProfile } from "../reducers/actions/profileAction";

export const profileUser = (profileData) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(receiveProfile(data.body))
      return response
    } else {
      throw new Error("Error user not found !");
    }
  } catch (error) {
    console.error(error);
  }
};
