import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function TripInfo ( { tripData }) {
    // console.log("test", tripData)
    return (
        <div>
            <h3 className = "destination" >
                { tripData.destination }
            </h3>

            <div className = "clan" >
                <p> { tripData.clan } </p>
            </div>
        </div>
    );
}

class TripList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: props.tripList,
        }
    }

    render() {
        // console.log("trip list error", this.props.tripList);

        let trip_list = this.props.tripList.map ( (data, index) => {
            return ( 
            <li className = "inner-item" key = { data.id } >
                <Link to = { '/singletrip'} >
                    <TripInfo tripData={data} />
                </Link>
            </li>
            );
        });

        console.log("my trip list",trip_list);

        let toRender = ( 
            <ul className = "item_list">
                { trip_list }
            </ul>
        );

        return (
            
            <div>
                <br></br>
                { toRender }
            </div>
        )
    }
}

export default TripList;