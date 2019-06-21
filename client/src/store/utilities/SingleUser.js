// src/store/utilities

import axios from 'axios';

// ACTION TYPES;
const FETCH_USER = "FETCH_USER";

// ACTION CREATORS;
const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user
  }
}

// THUNK CREATORS;
export const fetchUserThunk = () => (dispatch) => {
  return axios
    .get('/api/users')    
    .then(res => res.data)
    .then(thisUser => dispatch(fetchUser(thisUser)))
    .catch(err => console.log(err));
}

// SINGLE USER REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}
