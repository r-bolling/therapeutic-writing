import { getUserAPI } from "../../components/UserFunctions";
export const GETUSER = "USERS/GETUSER";
export const GETUSER_SUCCESS = "USERS/GETUSER_SUCCESS";
export const GETUSER_FAILURE = "USERS/GETUSER_FAILURE";

export const getUser = () => async (dispatch, getState) => {
  console.log("got to actions!");
  try {
    let email = getState().auth.email;
    console.log("email!", email);
    dispatch({ type: GETUSER });
    const payload = await getUserAPI(email);
    console.log(payload);
    dispatch({ type: GETUSER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GETUSER_FAILURE, payload: err.message });
  }
};
