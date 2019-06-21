import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="navFloatLeft">
                    <Link to = "/">Home</Link>
                </div>
                <div className="navFloatRight">
                    <Link to = "/singletrip"> Single Trip - Test </Link>
                    <Link to = "/dashboard"> Dashboard </Link>
                    <Link to = "/signup"> Sign Up </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar; 