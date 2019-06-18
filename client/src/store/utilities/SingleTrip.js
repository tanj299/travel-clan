// src/store/utilities
import axios from 'axios';

// ACTION TYPES;
const FETCH_TRIP = "FETCH_TRIP";

// ACTION CREATORS;
// FETCHES_TRIP_ID [] FROM EXPRESS/POSTGRES SERVER
const fetchTrip = (trip) => {
  return {
    type: FETCH_TRIP,
    payload: trip
  }
}

// THUNK CREATORS;
export const fetchTripThunk = () => (dispatch) => {
  return axios
    .get('/routes/trips')    
    .then(res => res.data)
    .then(thisTrip => dispatch(fetchTrip(thisTrip)))
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
