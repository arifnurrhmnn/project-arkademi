import { GET } from "./type";
import axios from "axios";

const apiUrl =
  "https://api.arkd.me/api.php?formKey=-MtGQOK0N1YObappdpAg&op=list";

export const getCourseBusiness = () => {
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
