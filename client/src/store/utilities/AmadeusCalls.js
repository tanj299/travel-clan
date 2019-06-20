import axios from 'axios';
const Amadeus = require('amadeus');


// ACTION TYPES;
const FETCH_AIRPORTS_IN_CITY = "FETCH_AIRPORTS_IN_CITY";
const FETCH_HOTELS_IN_CITY = "FETCH_HOTELS_IN_CITY";
const FETCH_POINTS_OF_INTEREST = "FETCH_POINTS_OF_INTEREST";  // using a user's trip parameter


// ACTION CREATORS
// FETCHES ALL USERS [] FROM EXPRESS/POSTGRES SERVER
const fetchAirportsInCity = (airports) => {
  return {
    type: FETCH_AIRPORTS_IN_CITY,
    payload: airports
  }
}


var amadeus = new Amadeus({
  clientId: 'iCC5eCZJXMAG44IO86tK0lDTWepR2hUp',
  clientSecret: 'UsgEGpWONqRMl2Tc'
});

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

// Points of Interest
// What are the popular places in Barcelona (based a geo location and a radius)
export const fetchPointsOfInterestThunk = (latitude, longitude) => (dispatch) => {
  return (
    amadeus.referenceData.locations.pointsOfInterest.get({
      latitude : 41.397158,
      longitude : 2.160873
    })
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
