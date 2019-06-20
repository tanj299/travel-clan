// src/store/utilities
import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_TRIPS = "FETCH_ALL_TRIPS";
const REMOVE_ALL_TRIPS = "REMOVE_ALL_TRIPS";
const ADD_NEW_TRIP = "ADD_NEW_TRIP";


// ACTION CREATORS;
const fetchAllTrips = (trips) => {
  return {
    type: FETCH_ALL_TRIPS,
    payload: trips
  }
}

const addNewTrip = (trip) => {
  return {
    type: ADD_NEW_TRIP,
    payload: trip
  }
}

const removeAllTrips = () => {
  return {
    type: REMOVE_ALL_TRIPS
  }
}

// THUNK CREATORS;
export const fetchAllTripsThunk = () => (dispatch) => {
  return axios
    .get('/api/allTrips') // Mockaroo Data    
    .then(res => res.data)
    .then(thisTrip => dispatch(fetchAllTrips(thisTrip)))
    .catch(err => console.log(err));
}

export const addNewTripThunk = (trip) => {
  return function(dispatch) {
    return axios
      .post("/api/allTrips", trip)
      .then(res => res.data)
      // .then(newTrip => dispatch(newTrip))
      .then(newTrip => dispatch(addNewTrip(newTrip)))
  }
}

export const removeAllTripsThunk = () => (dispatch) => {
  return dispatch(removeAllTrips());
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TRIPS:
      return action.payload;
    case REMOVE_ALL_TRIPS: 
      return [];
    case ADD_NEW_TRIP:
        return [...state, action.payload];
    default:
      return state;
  }
}


// console.log("my store", fetchAllTrips);