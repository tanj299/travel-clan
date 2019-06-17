import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DisplayFlights from './DisplayFlights.js';

const api_key = process.env.AMADEUS_API_KEY;
const api_secret = process.env.AMADEUS_API_SECRET;

// const amadeus = new Amadeus ({
//   clientId: api_key,
//   clientSecret: api_secret
// })


class ZipCode extends Component{
  constructor(props){
    super(props);
      this.state = {
        // url: https:/\/\test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&max=2,
        // Amadeus (Limited per Month)
   
        url: 'https://test.api.amadeus.com/v1',
      }
    }

  handleSubmit = (event) =>{
    // axios.get(this.state.url + event.target.value).then(res=>{
    //   this.setState({
    //     city: res.data
    //   })FmQXQqEfqMJhjvjSvIsCId2A9wrI
    // })
  }

  // npm install amadeus --save
  onSubmit = () => {
    const Amadeus = require('amadeus');
    console.log(Amadeus, "Amadeus");


    var amadeus = new Amadeus({
        clientId: 'pjG7G4SsRQG4GlGxU1rc5u3dlTVD21V1',
        clientSecret: 'gUtY9rlK5yL9S605'
    });

    amadeus.referenceData.urls.checkinLinks.get({
      airlineCode: 'BA'
    }).then(function(response){
      console.log("Hello", response.data[0].href);
    }).catch(function(responseError){
      console.log("Hello", responseError.code);
    });
  }

  render(){
    console.log("ApiKey", api_key);
    console.log(this.state)
    return (
      <div>
        <form>
          <div>{
            this.state.city && this.state.city.map(obj => {
              return <DisplayFlights State={obj.State}/>
            })
          }</div>
          <label> Trigger </label>
          
          <input type="text"  onChange={this.handleSubmit}/>
          <button onClick={this.onSubmit}> Air Traffic Data</button>
        </form>
      </div>
    )
  }
};

ZipCode.propTypes = {
  zip: PropTypes.number,
  url: PropTypes.string,
  city: PropTypes.string
};

export default ZipCode;