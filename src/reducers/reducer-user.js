import { FETCH_DATA } from "../actions"
const DEFAULT_STATE = null

const userReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      const data = action.payload.data;
      
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