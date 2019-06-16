    import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class home extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            firstName: "",
            lastName: "",
            email: "",

            displayErrorMessage: false 
        }
    }

    handleInputChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value 
        });
    }

    submitData = (event) => {
        event.preventDefault();
        // this.props.newUser(this.state);

        console.log("Added!");
    }

    render() {
        return (
            <div className = "login-wrapper">
                <div className = "login-form">
                    <div className = "edit-form">
                        <label className = "login-label" htmlFor = "firstName">
                            First Name
                        </label>
                        <input type = "text" name = "firstName" onChange = {this.handleInputChange} />
                    </div> 

                    <div className="edit-form">
                        <label className = "login-label" htmlFor = "lastName">
                            Last Name
                        </label>
                        <input type = "text" name = "lastName" onChange = {this.handleInputChange} />
                    </div>  

                    <div className = "edit-form">
                        <label className = "login-label" htmlFor = "email">
                            Email
                        </label>
                        <input type = "text" name = "email" onChange = { this.handleInputChange } />
                    </div>

                    <div className="button-wrapper">
                        { (this.state.displayErrorMessage) && ( <p className = "error-message"> Please Fill All Fields </p>)}
                        <input type = "submit" onClick = { this.submitData } className = "button" value = "Sign In"/>
                    </div>
                </div>
            </div>
        )
    }
}
