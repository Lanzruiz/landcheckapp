import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../../../type";
import { setAlert } from "./alert";
import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

   const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/auth`, config
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/register`,
        body,
        config,
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", 3000)),
        );
      }

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch(setAlert("Account is already registered", "danger", 3000));
    }
  };


// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/login`,
        body,
        config,
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", 3000)),
        );
      }

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch(setAlert("Invalid credentials", "danger", 3000));
    }
  };
