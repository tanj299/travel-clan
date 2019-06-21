import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleTripThunk, fetchAirportsInCityThunk, fetchPointsOfInterestThunk } from '../thunks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AmadeusAirports from './AmadeusAirports';

const Zomato = '3c38e45bc11c96e575881ecc7a03d746';


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
    let currentCity = this.props.fetchAirportsInCity(this.state.city);
  
    // console.log("Points of Interest")  
    this.props.fetchPointsOfInterest(this.state.latitude, this.state.longitude);
    // console.log("does this print", currentCity)
  }
  
  render() {
    console.log('Trip Render', this.props)
    const { thisTrip, singleTrip } = this.props
    const myTrip = singleTrip || []
    
    return (
      <div>
        <div>
        {/* <h1 className="title"> Trip: {thisTrip.destination}</h1> */}
       {/* <button onClick = {this.displayChat}>Chat Here!</button> */}
       <h1>This is single trip</h1>
       <p><Link to = "/channels/:channelId">ChatHere!</Link> </p>
          {this.props.singleTrip.id}
          </div>
    
        <div>

            {myTrip.map((trip, index) => {
          let myDestination = trip.destination // gets New York 
          let myCity = trip.currentCity	// gets NYC 
          // console.log('current destination', myDestination);
          // console.log('current destination', myCity);

      return (
			<div>
				<br></br>	
			{/* <Link to = '/singletrip'>
				{trip.destination}
			</Link> */}
			</div>
          )
        })} 

        </div>

        <div>
       <br/>
        
        <form onSubmit= {this.handleSubmit} >
          <label className = "login-label"> Connect with Airports in: </label>
            <input type="text" placeholder="Input city i.e. London, Paris, NYC" onChange={this.handleCity}/>
          <label> Connect with Airports in: </label>  
            <input placeholder="39.961388 Latitude" onChange={this.handleLatitude}/>
            <input placeholder="39.961388 Longitude" onChange={this.handleLongitude}/>
            <div className = "button-wrapper">
               <button className = "button"> Click </button>
            </div>
        </form >
        
        {/* Map over All Airports In Designated City */}
        <div>{
          this.props.airportsInCity.map(res => {
          return (
            <div> 
              <div> City Code: {res.address.cityCode} </div> 
            </div> );
          }) 
        }</div>

        {/* Map over Points of Interest */}
        <div>{
          this.props.pointsOfInterest.map(res => {
            return (
              <div className = "login-form">
              <div className = "edit-form"> 
                <p> Points Of Interest: { res.name } </p> 
                <p> Latitude: { res.geoCode.latitude } </p> 
                <p> Longitude: { res.geoCode.longitude } </p> 
                <p> Should you go: { res.analytics.travelers.score < 5 ? <span className="notRecommended"> Not Recommended </span> : <span className = "recommended"> Yes </span> }</p>
                <p> Timezone: { res.timeZoneOffset } </p> 
              </div> 
              </div>);
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

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);