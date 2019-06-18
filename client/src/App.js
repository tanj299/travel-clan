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
import Dashboard from './components/Dashboard'
import Login from './components/Login'
// // import allUsers from './components/allUsersChat' 
import SingleTrip from './components/SingleTrip'
// // import selectedChatRoom from './components/selectedChatRoom';
import Signup from './components/Signup'
import NotFound from './components/NotFound';

const App = () => { 
    return (
        <div className = "App">
            
            <Router>
                <div>
                    <Navbar /> 
                    <div className="page-body">      

                    <Switch>
                        <Route path = "/" exact component = { Login } />
                        <Route path = "/signup" component = { Signup } />
                        <Route path = "/dashboard" component = { Dashboard } />
                        <Route path = "/dashboard/user/:id" component = { Dashboard } />
                        <Route path = "/singletrip/user/:id" component = { SingleTrip } />
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