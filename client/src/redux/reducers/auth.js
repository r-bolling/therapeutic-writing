import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions";

const INITIAL_STATE = {
  isAuthenticated: false,
  email: "",
  loading: false,
  error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { email, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        email,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
