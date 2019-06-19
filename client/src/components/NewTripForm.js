import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTripThunk } from '../thunks';
// import { Link } from 'react-router-dom';
const Amadeus = require('../amadeus');
const amadeus = new Amadeus();

class NewTripForm extends Component {
  constructor() {
    super();
    this.state = {  }
  }

  handleSubmit() {
    this.props.addNewTrip(this.state);
  }

  render(){
    console.log("CREATE NEW TRIP TO POST", this.state.addNewTrip, this.props.addNewTrip);

    return (
      <div>
       NEW TRIP (WORK FLOW?)
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    addNewTrip: (TripToPost) => dispatch(addNewTripThunk(TripToPost))
  }
}

export default connect(null, mapDispatchToProps)(NewTripForm); // we pass in null if we don't use mapStateToProps;