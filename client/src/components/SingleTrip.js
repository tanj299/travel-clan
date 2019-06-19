import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTripThunk } from '../thunks';
import { Link } from 'react-router-dom';

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
    this.props.fetchTrip()
  }

  // Hotel Search API
  // Get list of hotels by city code
  handleSearchHotelOffers = (event) => {
    this.setState({
      hotelOffers: 
        amadeus.shopping.hotelOffers.get({
        cityCode : event.target.value // Example "MAD"
      })
    })
  }

  // Returns a list of airports and cities matching a given keyword.
  handleLocations = (event) => {
    this.setState({
      airportsFromCity: amadeus.referenceData.location.get({
        keyword: event.target.value, // i.e. 'lon' <- london
        subType: Amadeus.location.any
      })
    }) 
  }

  render() {
    console.log('Trip Render', this.props)
    const { thisTrip } = this.props

    return (
      <div>
        <h1 className="title"> Your Trip:  {thisTrip.destination} </h1>
        {/* <br> */}

        <h3>Get Airports in a City</h3>
        <label> Input City: </label>
        <input type="text" placeholder="i.e. London, Paris, NYC" onChange={this.handleLocations}/>
 
        Map over All Airports In Designated City
        <div>{ this.state.airportsFromCity && this.state.airportsFromCity.map(res => {
          console.log("Iata", res.iataCode);
          console.log("Detailed", res.detailedName);
          console.log("Name", res.name);
          console.log("Address", res.cityName, res.countryName, res.regionCode);
          
          return (
            <div className="ListComponent"> 
              <div> IataCode: {res.iataCode} </div> 
              <div> Detailed Name: {res.detailedName} </div> 
              <div> Name: {res.name} </div> 
              <div> Address: {res.cityName}, {res.countryName}
                    , {res.regionCode} </div> 
            </div> );
          }) 
        }</div>

        
        <h3>Get Airports in a City</h3>
        <label> Input City: </label>
        <input type="text" placeholder="i.e. London, Paris, NYC" onChange={this.handleLocations}/>
 
        Map over All Airports In Designated City
        <div>{ this.state.airportsFromCity && this.state.airportsFromCity.map(res => {
          console.log("Iata", res.iataCode);
          console.log("Detailed", res.detailedName);
          console.log("Name", res.name);
          console.log("Address", res.cityName, res.countryName, res.regionCode);
          
          return (
            <div className="ListComponent"> 
              <div> IataCode: {res.iataCode} </div> 
              <div> Detailed Name: {res.detailedName} </div> 
              <div> Name: {res.name} </div> 
              <div> Address: {res.cityName}, {res.countryName}
                    , {res.regionCode} </div> 
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

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);
