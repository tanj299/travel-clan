// container to render all components with routes
// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import Navbar from './components/partials/Navbar.js';
import Footer from './components/partials/Footer.js';
import './App.css'; // import css

// import components 
import allTrips from './components/AllTrips'
import login from './components/Login'
// // import allUsers from './components/AllUsersChat' 
import singleTrip from './components/SingleTrip'
// // import singleUser from './components/SingleUser'
// // import selectedChatRoom from './components/SelectedChatRoom';
import signup from './components/SignUp'

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
            <Route path = "/allTrips" component = { allTrips } />
            <Route path = "/allTrips/user/:id" component = { allTrips } />
            <Route path = "/singletrip/user/:id" component = { singleTrip } />
            {/* <Route path = "*" component = { notFound } /> */}
          </Switch>

          </div>
          <Footer />
        </div>
      </Router>
    </div>
  ); 
}

export default App;
