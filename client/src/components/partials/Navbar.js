import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>    
                <nav>
                    <Link to = "/" className = "home-link">
                        Home
                    </Link>
                    <Link to = "/singletrip"> Search Info </Link>
                    <Link to = "/dashboard"> Dashboard </Link>
                    <Link to = "/signup"> Sign Up </Link>
                </nav>
            </nav>
        )
    }
}

export default Navbar; 