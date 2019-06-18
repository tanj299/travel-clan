import React, { Component } from 'react';
import { connect } from 'react-redux';  // Connects react app to the redux-store
// import TripList from './partials/TripList.js';
import { Link } from 'react-router-dom';
import { fetchAllTripsThunk } from '../thunks'; // Allows data in a function be passed down into a state

class AllTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {     
    }
  }

  componentDidMount () {
    this.props.fetchAllTrips() 
  }

  render() {
    console.log('All Trips:', this.props)
    const { currentTrip } = this.props

    return (
      <div className = "list">
        <br></br>
        <p> This is all my trips </p> 
        <Link to = "/addTrip">Add Trip</Link> 
        {/* <TripList tripList = { this.state.dummyData } /> */}

        {/* Map over All Students Received from the database */}
        <div>{ currentTrip && currentTrip.map(res => {
            return (
              <div className="ListComponent"> 
                <div className="Name"> {res.name} </div> 
                {/* <div className="studentCampus">{res.campus} </div>          */}
              </div>);
          }) }</div>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentTrip: state.currentTrip
  }
}

function mapDispatch(dispatch) {
  return {
    fetchAllTrips: () => dispatch(fetchAllTripsThunk())
   }
}

export default connect(mapStateToProps, mapDispatch)(AllTrips);