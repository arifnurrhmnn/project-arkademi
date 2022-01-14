import { GET } from "./type";
import axios from "axios";

const apiUrl =
  "https://api.arkd.me/api.php?formKey=-MtGNco05S4fk7453sI7&op=list";

export const getCourseFlashSale = () => {
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
