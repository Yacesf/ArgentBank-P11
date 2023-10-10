const initialState = {
  user: null,
  error: null,
  isLogged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("loginToken", action.payload);
      return {
        user: action.payload,
        error: null,
        isLogged: true,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        error: action.payload,
        isLogged: false,
      };
    case "LOGOUT":
      return {
        user: null,
        error: null,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
