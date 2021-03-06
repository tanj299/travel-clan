/*
For now, the user can enter their display name.
Eventually it will be inputed to the store from the original authentication 
and this will be uneccesary.
 */


import React from 'react'
import { connect } from 'react-redux'


import { userSet } from '../thunks'

class NameEntry extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { value: name } = event.target
        this.props.userSet(name)
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Your name:</label>
                <input
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.userName}
                />
            </div>
        )
    }
}

export default connect(
    
    state => ({
        userName: state.user,
    }),
    dispatch => ({
        userSet: nameStr => dispatch(userSet(nameStr)),
    })
)(NameEntry)
