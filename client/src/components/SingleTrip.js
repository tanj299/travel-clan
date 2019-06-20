import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTripThunk, fetchAirportsInCityThunk } from '../thunks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AmadeusAirports from './AmadeusAirports';
import AmadeusCalls from '../store/utilities/AmadeusCalls';

const Zomato = '3c38e45bc11c96e575881ecc7a03d746';



class SingleTrip extends Component{
  constructor(props){
  	super(props)
    this.state = {
      data: [],
      city: ''
    };
  }

  componentDidMount() {
    this.props.fetchTrip()
  }

  handleChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // Returns a list of airports and cities matching a given keyword.
  handleSubmit = (event) => {
    event.preventDefault(); // prevent default refresh
    this.props.fetchAirportsInCity(this.state.city)  
  }
    

  render() {
    const { thisTrip } = this.props;
    return (
      <div>
        <h1 className="title"> Your Trip:  {thisTrip.destination}</h1><br/>
        <label> Connect with Airports in: </label>
        <form onSubmit= {this.handleSubmit} >
          <input type="text" placeholder="Input city i.e. London, Paris, NYC" onChange={this.handleChange}/>
          <button> Click </button>
        </form >
        
        {/* Map over All Airports In Designated City */}
        <div>{
          this.props.airportsInCity.map(res => {
          return (
            <div> 
              <div> City Code: {  res.address.cityCode} </div> 
            </div> );
          }) 
        }</div>

        {/* Map over All Airports In Designated City */}
        {/* <div>{
          this.props.airportsInCity.map(res => {
          return (
            <div> 
              <div> City Code: {  res.address.cityCode} </div> 
            </div> );
          }) 
        }</div> */}
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    thisTrip: state.thisTrip, // adds these values to prop list
    airportsInCity: state.amadeusCalls
  
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchTrip: () => dispatch(fetchTripThunk()),
    fetchAirportsInCity: (city) => dispatch(fetchAirportsInCityThunk(city))
  }
}

SingleTrip.propTypes = {
  city: PropTypes.string
};

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);
