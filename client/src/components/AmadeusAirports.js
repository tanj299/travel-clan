import axios from 'axios';
import React, { Component } from 'react';

class AmadeusAirports extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>{this.state.city}</div>
        <div>{this.state.country}</div>
        <div>{this.state.city}</div>
      </div>
    );
  }
};

// Connect Student to the redux-store
export default AmadeusAirports;
