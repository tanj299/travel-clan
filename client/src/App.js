// container to render all components with routes
// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import Navbar from './components/partials/Navbar.js';
import Footer from './components/partials/Footer.js';
import './App.css'; // import css

// import components 
import AllTrips from './components/AllTrips'
import Login from './components/Login'
// // import allUsers from './components/AllUsersChat' 
import SingleTrip from './components/SingleTrip'
// // import singleUser from './components/SingleUser'
// // import selectedChatRoom from './components/SelectedChatRoom';
import SignUp from './components/SignUp'

const App = () => { 
  return (
    <div className = "App">
      <Router>
        <div>
          <Navbar /> 
          <div className="page-body">      

          <Switch>
            <Route path = "/" exact component = { Login } />
            <Route path = "/signup" component = { SignUp } />
            <Route path = "/allTrips" component = { AllTrips } />
            <Route path = "/allTrips/user/:id" component = { AllTrips } />
            <Route path = "/singletrip/user/:id" component = { SingleTrip } />
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
