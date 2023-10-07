const initialState = {
  user: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
