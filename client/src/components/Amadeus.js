import axios from 'axios';
import React, { Component } from 'react'

export default class Amadeus extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


onSubmit = () => {

    const Amadeus = require('amadeus'); 
    console.log(Amadeus, 'Amadeus'); 

    let amadeus = new Amadeus ({
        clientId: 'pjG7G4SsRQG4GlGxU1rc5u3dlTVD21V1', 
        clientSecret: 'gUtY9rlK5yL9S605'
    });


    amadeus.referenceData.urls.checkinLinks.get({
        airlineCode: 'BA'
    }).then(function(response){
        console.log("Hello", response.data[0].href);
    }).catch(function(responseError) {
        console.log("Hello", responseError.code);
    });
}

// render() {
//     console.log("ApiKey", api_key)
//     console.log(this.state)
// }