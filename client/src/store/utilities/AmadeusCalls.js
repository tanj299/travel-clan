const Amadeus = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'iCC5eCZJXMAG44IO86tK0lDTWepR2hUp',
  clientSecret: 'UsgEGpWONqRMl2Tc'
});

// ACTION TYPES;
const FETCH_AIRPORTS_IN_CITY = "FETCH_AIRPORTS_IN_CITY";

// ACTION CREATORS
// FETCHES ALL USERS [] FROM EXPRESS/POSTGRES SERVER
const fetchAirportsInCity = (airports) => {
  return {
    type: FETCH_AIRPORTS_IN_CITY,
    payload: airports
  }
}

// THUNK CREATORS;
export const fetchAirportsInCityThunk = (city) => (dispatch) => {
  return ( 
    amadeus.referenceData.locations.get({
      keyword: city,
      subType: 'AIRPORT' // subType: 'AIRPORT,CITY'
      })
      .then(res => res.data)
      .then(airport => dispatch(fetchAirportsInCity(airport)))
      .catch(err => console.log(err))
  );
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_AIRPORTS_IN_CITY:
      return action.payload;
    default:
      return state;
  }
}
