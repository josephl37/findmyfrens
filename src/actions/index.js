import axios from "axios";
export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchUser(query) {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_PENDING });
    axios
      .get(`https://ensdata.net/${query}`)
      .then((response) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: {
            error: error.message,
          },
        });
      });
  };
}
