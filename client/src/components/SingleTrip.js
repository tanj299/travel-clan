import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTripThunk } from '../thunks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AmadeusAirports from './AmadeusAirports';

const Zomato = '3c38e45bc11c96e575881ecc7a03d746';

const Amadeus = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'iCC5eCZJXMAG44IO86tK0lDTWepR2hUp',
  clientSecret: 'UsgEGpWONqRMl2Tc'
});

class SingleTrip extends Component{
  constructor(props){
  	super(props)
    this.state = {
      data: []
    };
    // this.amadeus = this.amadeus.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrip()
  }

  // Hotel Search API
  // Get list of hotels by city code
  handleSearchHotelOffers = (event) => {
    this.setState({
      hotelOffers: amadeus.shopping.hotelOffers.get({
        cityCode : event.target.value // Example "MAD"
      })
    })
  }

  // Returns a list of airports and cities matching a given keyword.
  handleLocations = (event) => {
    (amadeus.referenceData.locations.get({
      keyword: event.target.value,
      subType: 'AIRPORT' // subType: 'AIRPORT,CITY'
    }).then(function(response){
      console.log("Response Data", response.data); // first page
      this.setState({ data: response.data.address})
      return amadeus.next(response);
    }).then(function(nextReponse){
      console.log("Next Response", nextReponse.data); // second page
    }))
  }
    

  render() {
    console.log('Trip Render', this.props)
    const { thisTrip } = this.props

    return (
      <div>
        <h1 className="title"> Your Trip:  {thisTrip.destination}</h1><br/>
        <label> Input City: </label>
        <input type="text" placeholder="i.e. London, Paris, NYC" onChange={this.handleLocations}/>
 
        {/* Map over All Airports In Designated City */}
        <div>
        {this.state.data.map(res => {
          return (
            <div> 
              <div> City Code: {res.address.cityCode} </div> 
            </div> );
          }) 
        }</div>

      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    thisTrip: state.thisTrip
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchTrip: () => dispatch(fetchTripThunk())
  }
}

SingleTrip.propTypes = {
  data: PropTypes.array
};

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);
