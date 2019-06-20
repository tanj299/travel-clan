//front end
// container to render all components with routes
// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import Navbar from './components/partials/Navbar.js';
import Footer from './components/partials/Footer.js';
import './App.css'; // import css

// import components 
import Dashboard from './components/Dashboard'
import Login from './components/Login'
// // import allUsers from './components/allUsersChat' 
import SingleTrip from './components/SingleTrip'
// // import selectedChatRoom from './components/selectedChatRoom';
import SignUp from './components/SignUp'
import NotFound from './components/NotFound';
import Main from './components/Main'; //chat

import MessagesList from './components/MessagesList.js';


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
                        <Route path = "/singlepage" component = { SingleTrip } />
                        {/* route path should be :user / dashboard but we need backend and store */}
                        <Route path = "/dashboard" component = { Dashboard } />
                        {/* <Route path = "/dashboard/user/:id" component = { Dashboard } /> */}
                        <Route path= "/singletrip" component = { SingleTrip } />
                        <Route path ="/channels/:channelId" component = {Main}/>
                         <Route path = "*" component = { NotFound } />
                    </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
  ); 
}

export default App;
