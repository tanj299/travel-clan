import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchSingleTripThunk } from '../thunks';
import { connect } from 'react-redux';

class SingleTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.props.fetchSingleTrip(this.props.match.params.id)
        console.log("single trip", this.props)
    }

    render() {
        // const  { singleTrip }= this.props 
        
        console.log("single trip", this.props)
        return (
            <div>
                This is single trip 
                    {  this.props.singleTrip && this.props.singleTrip }
                    { this.props.singleTrip }
            </div>
        )
    }
}

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