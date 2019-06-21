import React, { Component } from 'react'
import TripList from './partials/TripList.js';
import { fetchAllTripsThunk } from '../thunks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Dashboard extends Component {
    
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

    componentDidMount() {
        this.props.fetchAllTrips();
    }


    render() {
        return (
            <div >

                <br></br>
                <p className="AddTrip"><Link to="/addtripform">Add Trip</Link></p>

                <div>
                    <TripList tripList = { this.props.allTrips } />
                </div>
            </div>
        )
    }
}

// remember, the state in mapStateToProps is literally map the state of all trips to the STORE state 
const mapStateToProps = (state) => {
    return {
        allTrips: state.allTrips 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTrips: () => dispatch(fetchAllTripsThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)