import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleTripThunk, fetchAirportsInCityThunk, fetchPointsOfInterestThunk } from '../thunks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SingleTrip extends Component{
  constructor(props){
  	super(props)
    this.state = {
      data: [],
      city: '',
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    this.props.fetchSingleTrip()
    // console.log("this is single trip",this.props.fetchSingleTrip());
  }

  handleCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleLatitude = (event) => {
    this.setState({
      latitude: event.target.value
    })
  }

  handleLongitude = (event) => {
    this.setState({
      longitude: event.target.value
    })
  }

  // Returns a list of airports and cities matching a given keyword.
  handleSubmit = (event) => {
    event.preventDefault(); // prevent default refresh
    // this.props.fetchAirportsInCity(this.state.city);
    console.log(this.handleLatitude , "LATITUDE");
    console.log(this.handleLongitude , "LONGITUDE");
    this.props.fetchPointsOfInterest(this.state.latitude, this.state.longitude);
  }
  
  render() {
    console.log('Trip Render', this.props)
    const { singleTrip } = this.props
    const myTrip = singleTrip || []
    
    return ( <div className="marginTop">
        <div>
          <h1 className="myTripHead">MY TRIPS</h1>
          <p className="myTripBtn"><Link to = "/channels/:channelId"> Need a Clan? Chat Here. </Link> </p>
          {this.props.singleTrip.id}
        </div>

      {/* =================================================================== */}
        <div>{ myTrip.map((trip, index) => {
          return (
            <div>
              <br></br>	
              <Link to = '/singletrip'>{trip.destination}</Link>
            </div>)
          })
        }</div>

      {/*================================================================== */}
        <div>
          <br/>
          <form onSubmit= {this.handleSubmit} >
            <h2 className="places">Find Places To Visit</h2>
            <label> Enter Coordinates </label>  
              <input placeholder="39.961388 Latitude" onChange={this.handleLatitude}/>
              <input placeholder="39.961388 Longitude" onChange={this.handleLongitude}/>
            <button className="myChatBtn"> Find Places to Visit </button>
          </form >
        
          {/* Map over Points of Interest */}
          <div>{
            this.props.pointsOfInterest.map(res => {
              console.log(res);
              return (
                <div className="pointsOfInterest"> 
                  <div> { res.address.cityName }, {res.address.countryName} </div> 

                  <div> Type: { res.name } </div> 
                  <div> Traveler's Score {
                    res.analytics.travelers.score > 5 ? <span id="recommend"> RECOMMENDED </span> :
                    <span id="notRecommend"> NOT RECOMMENDED </span>
                  }</div> 

                  <div> Flight's Score {
                    res.analytics.flights.score > 5 ? <span id="recommend"> RECOMMENDED </span> :
                    <span id="notRecommend"> NOT RECOMMENDED </span>
                  }</div> 
                </div> );
              }) 
            }</div>
        </div>
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    singleTrip: state.singleTrip, // adds these values to prop list
    airportsInCity: state.amadeusCalls,
    pointsOfInterest: state.pointsOfInterest
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchSingleTrip: () => dispatch(fetchSingleTripThunk()),
    fetchAirportsInCity: (city) => dispatch(fetchAirportsInCityThunk(city)),
    fetchPointsOfInterest: (latitude, longitude) => dispatch(fetchPointsOfInterestThunk(latitude, longitude))
  }    
}

SingleTrip.propTypes = {
  city: PropTypes.string
};

// Connect SingleTrip to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);
