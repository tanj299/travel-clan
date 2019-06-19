import React, { Component } from 'react'

let ItineraryInfo = ( { itineraryList }) => {
    return (
        <div>
            <h3> { itineraryList } </h3>
        </div>
       
    ) 
}

export default class ItineraryList extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            data: props.itineraryList,
        }
    }

    render() {
        let itineraryList = this.props.itineraryList.map ( (data, index) => {
            return (
                <li key={ data } >
                    <ItineraryInfo itineraryList = { data } />
                </li> 
            );
        });

        console.log("my itinerary list", this.props.itineraryList)
        let toRender = (
            <ul>
                { itineraryList }
            </ul>
        );

        return (
            <div>
                { toRender }
            </div>
        )
    }
}
