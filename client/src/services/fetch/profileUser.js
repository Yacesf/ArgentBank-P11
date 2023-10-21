import { receiveFirstName, receiveLastName, receiveUserName } from "../reducers/profileReducer";

export const fetchProfileUser = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json()
        dispatch(receiveFirstName(data.body.firstName));
        dispatch(receiveLastName(data.body.lastName));
        dispatch(receiveUserName(data.body.userName));
      return data
    } else {
      throw new Error("Error user not found !");
    }
  } catch (error) {
    console.error(error);
  }
};
