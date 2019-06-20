import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTripThunk } from '../thunks';
import { Link } from 'react-router-dom';
// const Amadeus = require('../amadeus');
// const amadeus = new Amadeus();

class NewTripForm extends Component {
  constructor() {
    super();
    this.state = {  
		tripname: '',
		currentCity: '',
		destination: '',
		startDate: '',
		endDate: '',
	}
  }

	handleInputChange = (event) => {
		this.setState ({
			[event.target.name]: event.target.value 
		});
	}

	handleSubmit() {
		this.props.addNewTrip(this.state);
	}

	render(){
		console.log("CREATE NEW TRIP TO POST", this.state.addNewTrip, this.props.addNewTrip);

		return (
				<div className="login-wrapper">
					<div className="login-form">
						<div className="edit-form">
							<label className="login-label" htmlFor="tripName">
								Trip Name
                        </label>
							<input type="text" name="firstName" placeholder="Name your trip" onChange={this.handleInputChange} />
						</div>

						<div className="edit-form">
							<label className="login-label" htmlFor="destination">
								Destination
                        </label>
							<input type="text" name="destination" placeholder="Where to (country) ?" onChange={this.handleInputChange} />
						</div>

						<div className="edit-form">
							<label className="login-label" htmlFor="email">
								City
                        </label>
							<input type="text" name="city" placeholder="What city?" onChange={this.handleInputChange} />
						</div>

						<div className="edit-form">
							<label className="login-label" htmlFor="startDate">
								Start Date
                        </label>
							<input type="text" name="password" placeholder="From ..." onChange={this.handleInputChange} />
						</div>

						<div className="edit-form">
							<label className="login-label" htmlFor="endDate">
								End Date
                        </label>
							<input type="text" name="password" placeholder="To..." onChange={this.handleInputChange} />
						</div>

						<div className="button-wrapper">
							{(this.state.displayErrorMessage) && (<p className="error-message"> Please Fill All Fields </p>)}
							<input type="submit" onClick={this.submitData} className="button" value="Confirm" />
						</div>
					</div>
			</div>
		)
	}
};

function mapDispatchToProps(dispatch) {
  return {
    addNewTrip: (tripToPost) => dispatch(addNewTripThunk(tripToPost))
  }
}

export default connect(null, mapDispatchToProps)(NewTripForm); // we pass in null if we don't use mapStateToProps;