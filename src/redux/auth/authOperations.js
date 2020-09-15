import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; //.common - означает для всех типов запросов не только при post или get
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token); // обязательно для регистрации
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((responce) => {
      token.set(responce.data.token); // обязательно для регистрации
      dispatch(authActions.loginSuccess(responce.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => authActions.getCurrentUserError(error));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset(); // обязательно при разлогине
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => authActions.logoutError(error));
};

export default { register, logIn, logOut, getCurrentUser };
