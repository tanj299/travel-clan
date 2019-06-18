import React, { Component } from 'react'
import TripList from './partials/TripList.js';
import ItineraryList from './partials/ItineraryList';
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayErrorMessage: false,
            dummyData: [
                {   
                    id: 1,
                    user: "Leslie", 
                    destination: "Pawnee",
                    clan: "Parks and Rec"
                }, 
                {  
                    id: 2,
                    user: "Chidi",
                    destination: "Good Place",
                    clan: "The Bad Place People"
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
                <div className = "list-container">

                    <br></br>
                    <p> This is all my trips </p> 
                    <Link to="/addTrip">Add Trip</Link>

                    <div className = "large-list">
                        <TripList tripList = { this.state.dummyData } />
                    </div>

                    {/* <ItineraryList itineraryList = { this.state.anotherData } /> */}
                </div>
        )
    }
}
