const Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'iCC5eCZJXMAG44IO86tK0lDTWepR2hUp',
  clientSecret: 'UsgEGpWONqRMl2Tc'
});

// ACTION TYPES;
const FETCH_POINTS_OF_INTEREST = "FETCH_POINTS_OF_INTEREST";  // using a user's trip parameter

// ACTION CREATORS
const fetchPointsOfInterest = (places) => {
  return {
    type: FETCH_POINTS_OF_INTEREST,
    payload: places
  }
}

// THUNK CREATORS;
// Points of Interest
// What are the popular places in Barcelona (based a geo location and a radius)
export const fetchPointsOfInterestThunk = (latitude, longitude) => async (dispatch) => {

  const {data} = await amadeus.referenceData.locations.airports.get({
    longitude : longitude,
    latitude  : latitude
  })
    console.log('DATA', data)
    dispatch(fetchPointsOfInterest(data))
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POINTS_OF_INTEREST:
      return action.payload;
    default:
      return state;
  }
}
