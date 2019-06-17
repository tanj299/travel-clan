import { assertFunctionParent } from 'babel-types';

const Amadeus = require('amadeus'); 

let amadeus = new Amadeus({
    clientId: 'pjG7G4SsRQG4GlGxU1rc5u3dlTVD21V1',
    clientSecret: 'gUtY9rlK5yL9S605'
});

// ACTIONS
const FETCH_SINGLE_TRIP = 'FETCH_SINGLE_TRIP';
const FETCH_AMADEUS = 'FETCH_AMADEUS';

// ACTION CREATORS
const fetchAmadeus

const fetchSingleTrip = (user) => {
    return {
        type: FETCH_SINGLE_TRIP,
        payload: user
    }
}

// THUNKS

export const fetchSingleTripThunk = (user) => {
    return axios
        .get()
}

// REDUCERS
export default (state = { singleTrip: {} }, action ) => {
    switch(action.type) {
        case FETCH_SINGLE_TRIP: 
            return {
                ...state, singleTrip: action.payload
            }
    }
}
