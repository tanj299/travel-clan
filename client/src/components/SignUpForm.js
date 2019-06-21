import React, { Component } from 'react'
import { addNewUserThunk } from '../thunks'
import { Link } from 'react-router-dom';
import { connect } from 'net';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "", 
            confirmPassword: "", 

            displayErrorMessage: false,
            passwordMatch: false
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitData = (event) => {
        event.preventDefault();
        this.props.addNewUser(this.state);

        console.log("Added!");
    }

    // checkPassword = (password, confirmPassword) => {
    //     if(password !== confirmPassword) {
    //         {(this.state.displayErrorMessage) && "Password doesn't match"} 
    //     }

    //     else {
    //         this.setState ({ 
    //             passwordMatch: true
    //         });
    //     }
    // }

    render() {
        return (
            <div className="login-wrapper">
                <div className="login-form">
                    <div className="edit-form">
                        <label className="login-label" htmlFor="firstName">
                            First Name
                        </label>
                        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleInputChange} />
                    </div>

                    <div className="edit-form">
                        <label className="login-label" htmlFor="lastName">
                            Last Name
                        </label>
                        <input type="text" name="lastName" placeholder = "Last Name" onChange={this.handleInputChange} />
                    </div>

                    <div className="edit-form">
                        <label className="login-label" htmlFor="email">
                            Email
                        </label>
                        <input type="text" name="email" placeholder="Email"onChange={this.handleInputChange} />
                    </div>

                    <div className = "edit-form"> 
                        <label className = "login-label" htmlFor = "password">
                            Password
                        </label>
                        <input type="text" name="password" placeholder="Password" onChange = { this.handleInputChange} />
                    </div>

                    <div className="edit-form">
                        <label className="login-label" htmlFor="password">
                            Confirm Password
                        </label>
                        <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleInputChange} />
                    </div>

                    <div className="button-wrapper">
                        {(this.state.displayErrorMessage) && (<p className="error-message"> Please Fill All Fields </p>)}
                        <input type="submit" onClick={this.submitData} className="button" value="Sign Up" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (newUser) => dispatch(addNewUserThunk(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm); 