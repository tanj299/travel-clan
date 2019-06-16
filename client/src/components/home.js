import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class home extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            data: [],
        }
    }
    render() {
        return (
            <div>
                <h1> Login </h1>
                This is Login 
            </div>
        )
    }
}
