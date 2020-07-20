import axios from "axios";
import { submitFormAction, getEntries } from "../redux/actions/journal-actions";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log("Registered!");
    });
};
export const loginAPI = (user) => {
  // you could send user.email to the reducer.
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      // dispatch user.email to reducer
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserAPI = (email) => {
  return axios
    .get(`users/profile/${email}`, {})
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutAPI = () => {
  return axios
    .get("users/logout")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

process.on("uncaughtException", function (err) {
  console.log(err);
});

export const getOpenEntries = (email, dispatch) => {
  return axios.post("users/journal", { email }).then((res) => {
    // console.log('res: ', res)
    console.log("res.entries: ", res.data.entries);
    dispatch(getEntries(res.data.entries));
    //
    if (!res.entry) {
      console.log("res: ", res);
    }
  });
};

export const addOpenEntry = (entry, dispatch) => {
  console.log("entry: ", entry);
  return axios.post("users/templates", entry).then((res) => {
    console.log("res.entry: ", res.data.entry);
    dispatch(submitFormAction(res.data.entry));
    if (!res.entry) {
      console.log("res: ", res);
    }
  });
};

export const getQuestion = (email, dispatch) => {
  return axios.get("users/templates", email).then((res) => {
    console.log("res.question: ", res.data.questions);
    dispatch(getQuestion(res.data.questions));
    //
    if (!res.entry) {
      console.log("res: ", res);
    }
  });
};

export const addPhotoEntry = (photoEntry) => {};

// {
//   entryType: 'open',
//   entry: {
//     title: 'hey',
//     body: 'body'
//   }
// }
