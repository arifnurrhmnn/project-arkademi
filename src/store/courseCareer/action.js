import { GET } from "./type";
import axios from "axios";

const apiUrl =
  "https://api.arkd.me/api.php?formKey=-MtGS_Xo8V5Tpc6RjPhX&op=list";

export const getCourseCareer = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
