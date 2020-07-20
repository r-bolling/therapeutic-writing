import axios from "axios";
import { loginAPI, logoutAPI } from "../../components/UserFunctions.js";
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";

// const apiLogin = (credentials) => {
//   return axios
//     .post("users/login", {
//       email: user.email,
//       password: user.password,
//     })
//     .then((res) => {
//       localStorage.setItem("usertoken", res.data);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const login = (credentials) => async (dispatch, getState) => {
  console.log("got to actions!");
  try {
    dispatch({ type: LOGIN });
    const payload = await loginAPI(credentials);
    console.log(payload);
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.message });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    await logoutAPI();
  } finally {
    dispatch({ type: LOGOUT });
  }
};
