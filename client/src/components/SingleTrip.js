import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Main from './Main';
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
  // displayChat=()=>{
  //   this.setState({this.Main})
  // }

  render() {
    console.log('Trip Render', this.props)
    const { thisTrip } = this.props

    return (
      <div>
        <h1 className="title"> Trip:  {thisTrip.destination}</h1>
       {/* <button onClick = {this.displayChat}>Chat Here!</button> */}
     <link to = "/Main">Chat Here!</link>

          This is single trip
                    {/* {  this.props.singleTrip && this.props.singleTrip } */}
          {this.props.singleTrip.id}
        </div>
      // </div>
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