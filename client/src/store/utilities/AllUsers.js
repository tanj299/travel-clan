import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_USERS = "FETCH_ALL_USERS";
const REMOVE_ALL_USERS = "REMOVE_ALL_USERS";
const ADD_NEW_USER = "ADD_NEW_USER";


// ACTION CREATORS
// FETCHES ALL USERS [] FROM EXPRESS/POSTGRES SERVER
const fetchAllUsers = (users) => {
  return {
    type: FETCH_ALL_USERS,
    payload: users
  }
}

const addNewUser= (user) => {
  return {
    type: ADD_NEW_USER,
    payload: user
  }
}

const removeAllUsers = () => {
  return {
    type: REMOVE_ALL_USERS
  }
}

// THUNK CREATORS;
export const fetchAllUsersThunk = () => (dispatch) => {
  return axios
    .get('/api/Users')    
    .then(res => res.data)
    .then(thisUser => dispatch(fetchAllUsers(thisUser)))
    .catch(err => console.log(err));
}

export const addNewUserThunk = (user) => {
  return function(dispatch) {
    return axios
      .post("localhost:3000/api/User", user)
      .then(res => res.data)
      .then(newUser => dispatch(newUser))
      // .then(newUser => dispatch(addNewUser(newUser)))
  }
}

export const removeAllUsersThunk = () => (dispatch) => {
  return dispatch(removeAllUsers());
}


// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case REMOVE_ALL_USERS: 
      return [];
    case ADD_NEW_USER:
        return [...state, action.payload];
    default:
      return state;
  }
}
