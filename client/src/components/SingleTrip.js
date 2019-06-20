import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchSingleTripThunk } from '../thunks';
import { connect } from 'react-redux';

const Amadeus = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'iCC5eCZJXMAG44IO86tK0lDTWepR2hUp',
  clientSecret: 'UsgEGpWONqRMl2Tc'
});

class SingleTrip extends Component{
  constructor(props){
  	super(props)
    this.state = {
      currentTrip: '',
      hotelOffers: [],
      airportsFromCity: []
    }
  }
  componentDidMount() {
    this.props.fetchSingleTrip()
    // console.log("this is single trip",this.props.fetchSingleTrip());
  }


  render() {
    console.log('Trip Render', this.props)
    const { thisTrip, singleTrip } = this.props
    const myTrip = singleTrip || []
    // console.log('This is the value of myTrip  obj ==================>>>>>',myTrip)
    return (
    
        <div>

        {myTrip.map((trip, index) => {
			let myDestination = trip.destination // gets New York 
			let myCity = trip.currentCity	// gets NYC 
			// console.log('current destination', myDestination);
			// console.log('current destination', myCity);
          return (
			<div>
				<br></br>	
			<Link to = '/singletrip'>
				{trip.destination}
			</Link>
			</div>
          )
        })} 

        </div>
    );
  }
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        singleTrip: state.singleTrip
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleTrip: () => dispatch(fetchSingleTripThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTrip);