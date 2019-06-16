// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// reusable parts of components 
import navbar from './components/partials/navbar'

// components 
import home from './components/home';
import allTrips from './components/allTrips'
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
                    <Switch>
                        <Route path = "/" exact component = { home } />
                        <Route path = "/signup" component = { signup } />
                        <Route path = "/alltrips/user/:id" component = { allTrips } />
                        <Route path = "/singletrip/user/:id" component = { singleTrip } />
                        <Route path = "*" component = { notFound } />
                    </Switch>
            </Router>
        </div>
    ); 
}



export default App;