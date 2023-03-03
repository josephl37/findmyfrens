import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions";

const DEFAULT_STATE = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      const data = action.payload.user;

      return {
        user: {
          address: data.address,
          ens: data.ens,
          twitter: data.twitter,
          avatar: data.avatar,
          avatar_url: data.avatar_url,
        },
        loading: false,
        error: null,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
