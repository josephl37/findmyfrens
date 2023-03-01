import axios from "axios"


export const FETCH_DATA = "FETCH_DATA"

export function fetchUser(query) {
  const request =  axios.get(`https://ensdata.net/${query}`)
  return {
    type: FETCH_DATA,
    payload: request,
  }
}