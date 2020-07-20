import { GETUSER, GETUSER_SUCCESS, GETUSER_FAILURE } from "../actions";

const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  favorite_quotes: [],
  error: "",
  loading: false,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GETUSER_SUCCESS:
      const { first_name, last_name, favorite_quotes } = action.payload.data;
      return {
        ...INITIAL_STATE,
        first_name: first_name,
        last_name: last_name,
        favorite_quotes: favorite_quotes,
        loading: false,
      };
    case GETUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
