// container to render all components with api route
// src/
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import Navbar from './components/partials/Navbar.js';
import Footer from './components/partials/Footer.js';
import './App.css'; // import css

// import components 
import Login from './components/Login' 
import SingleTrip from './components/SingleTrip'
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
            {/* <Route path = "/allTrips" component = { AllTrips } />
            <Route path = "/allTrips/user/:id" component = { AllTrips } /> */}
            <Route path = "/singletrip" component = { SingleTrip } />
            
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
