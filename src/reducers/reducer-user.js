import { FETCH_DATA } from "../actions"

//TODO: set up default state

const DEFAULT_STATE = {}


//TODO: set up userReducer function

const userReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      const data = action.payload.data;
      console.log(data);
      
      return {
        address: data.address,
        ens: data.ens,
        twitter: data.twitter,
        avatar: data.avatar
      }
      
    default: 
      return state;
  }
}

export default userReducer;