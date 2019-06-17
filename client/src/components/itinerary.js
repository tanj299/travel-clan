import React, { Component } from 'react'
import itineraryList from './partials/ItineraryList'

export default class itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dummyData: ['Eat', 'Pray', 'Love'],
        }
    }

    render() {
        return (
            <div className = "itinerary-list"> 
                <ItineraryList itineraryList = { this.state.dummyData }/> 
            </div>
        )
    }
}
