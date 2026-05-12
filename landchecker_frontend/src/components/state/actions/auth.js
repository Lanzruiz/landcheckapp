import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from "../../../type";
import { setAlert } from "./alert";

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
    } catch (err) {
      const errors = err.response.data.errors;

      if(errors) {
         errors.forEach((error) => dispatch(setAlert(error.msg, 'danger', 3000)));
      }

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch(setAlert("Account is already registered", "danger", 3000));
    }
  };

  