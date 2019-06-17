import React, { Component } from 'react';
import axios from 'axios'; 

class SingleTrip extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            data: [],
            searchTerm: "",
            key: "CpLb8P0N6LNag4YyhZ9MczGvsx19rbZ3",
        }
    }
}

// ACTIONS
const FETCH_SINGLE_TRIP = 'FETCH_SINGLE_TRIP';
const FETCH_AMADEUS = 'FETCH_AMADEUS';
const FETCH_GIPHY = 'FETCH_GIPHY';

// ACTION CREATORS
const fetchSingleTrip = (user) => {
    return {
        type: FETCH_SINGLE_TRIP,
        payload: user
    }
}

const fetchGiphy = (gif) => {
    return {
        type: FETCH_GIPHY,

    }
}

// THUNKS
// export const fetchGiphy = (user) => {
//     return axios
//         .get('https://api.giphy.com/v1/gifs/search?q=' + this.state.searchTerm + '&api_key=' + this.state.key)
//         .then 
// }

// REDUCERS
export default (state = { singleTrip: {} }, action ) => {
    switch(action.type) {
        case FETCH_SINGLE_TRIP: 
            return {
                ...state, singleTrip: action.payload
            }
        case FETCH_AMADEUS: 
            return {
                "hello"
            }
        default: 
            return state 
    }
}
