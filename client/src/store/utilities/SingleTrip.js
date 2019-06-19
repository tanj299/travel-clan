// src/store/utilities
import axios from 'axios';

// ACTION TYPES;
const FETCH_TRIP = "FETCH_TRIP";

// ACTION CREATORS;
// FETCHES_TRIP_ID [] FROM EXPRESS/POSTGRES SERVER
const fetchSingleTrip = (trip) => {
  return {
    type: FETCH_TRIP,
    payload: trip
  }
}

// THUNK CREATORS;
export const fetchSingleTripThunk = () => (dispatch) => {
  return axios
    .get('/api/trips')    
    .then(res => res.data)
    .then(thisTrip => dispatch(fetchSingleTrip(thisTrip)))
    .catch(err => console.log(err));
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRIP:
      return action.payload;
    default:
      return state;
  }
}
