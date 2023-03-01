import { FETCH_DATA } from "../actions"

//TODO: set up default state

const DEFAULT_STATE = {
  address: "0x17a059b6b0c8af433032d554b0392995155452e6",
  ens: "brenner.eth",
  twitter: "brennerspear",
  avatar_url: "https://avatars.githubusercontent.com/u/12127609?v=4"
}


//TODO: set up userReducer function

const userReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      const data = action.payload.data;
      console.log(data);
    default: 
      return state;
  }
}

export default userReducer;