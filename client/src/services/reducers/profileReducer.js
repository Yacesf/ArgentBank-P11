export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
const initialState = {
  id: "",
  email: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default profileReducer;
