import React, { Component } from 'react'

export default class allTrips extends Component {
    dummyData = {
        Destination: "Asgard", 
        Current  
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayErrorMessage: false
        }
    }

    // componentDidMount () {
    //     this.props.fetchAllTrips() 
    // }

    render() {
        return (
            <div className = "all-trips">
                This is all trips
                
            </div>
        )
    }
}
