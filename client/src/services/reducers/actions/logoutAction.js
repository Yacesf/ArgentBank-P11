const LOGOUT = "LOGOUT";

export const logout = () => (dispatch) => {
  localStorage.removeItem("loginToken");
  dispatch({ type: LOGOUT });
};
