export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
const initialState = {
  createdAt: "",
  email: "",
  firstName: "",
  id: "",
  lastName: "",
  updatedAt: "",
  userName: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
      case UPDATE_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
