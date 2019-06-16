// container to render all components with routes

// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import Navbar from './components/partials/Navbar.js';
import Footer from './components/partials/Footer.js';

// import css 
import './App.css';

// import components 
import home from './components/login';
import allTrips from './components/allTrips'
import login from './components/login'
// // import allUsers from './components/allUsersChat' 
import singleTrip from './components/singleTrip'
// // import singleUser from './components/singleUser'
// // import selectedChatRoom from './components/selectedChatRoom';
import signup from './components/signup'
import notFound from './components/notFound';

const App = () => { 
    return (
        <div className = "App">
            
            <Router>
                <div>
                    <Navbar /> 
                    <div className="page-body">      

                    <Switch>
                        <Route path = "/" exact component = { login } />
                        <Route path = "/signup" component = { signup } />
                        <Route path = "/alltrips" component = { allTrips } />
                        <Route path = "/alltrips/user/:id" component = { allTrips } />
                        <Route path = "/singletrip/user/:id" component = { singleTrip } />
                        <Route path = "*" component = { notFound } />
                    </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    ); 
}



export default App;