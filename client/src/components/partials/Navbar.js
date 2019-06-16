import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to = "/" className = "home-link">
                    Home
                </Link>
                <Link to = "/alltrips"> All Trips </Link>
                <Link to = "/singleTrip"> Single Trip </Link>
            </nav>
        )
    }
}

export default Navbar; 