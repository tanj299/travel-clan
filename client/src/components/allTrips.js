import React, { Component } from 'react'
import TripList from './partials/TripList.js';
import ItineraryList from './partials/ItineraryList';
import { Link } from 'react-router-dom'

export default class allTrips extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayErrorMessage: false,
            dummyData: [
                {   
                    id: 1,
                    destination: "Pawnee",
                    clan: "you"
                }, 
                {  
                    id: 2,
                    destination: "Good Place",
                    clan: "me"
                },
            ],

            anotherData: ['Eat', 'Pray', 'Love'],
        }
    }

    // componentDidMount () {
    //     this.props.fetchAllTrips() 
    // }


    render() {
        
        return (
                <div className = "list">
                    <br></br>
                    <p> This is all my trips </p> 
                    <Link to = "/addTrip">Add Trip</Link> 
                    <TripList tripList = { this.state.dummyData } />

                    <br></br>
                    {/* <ItineraryList itineraryList = { this.state.anotherData } /> */}
                </div>
        )
    }
}
