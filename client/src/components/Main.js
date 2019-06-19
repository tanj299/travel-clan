import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
// import Main from './Main';
import { fetchMessages } from '../thunks'

export class Main extends Component {


  componentDidMount () {
    console.log("MAIN")
    this.props.loadMessages()
  }

  
  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/channels/:channelId" component={MessagesList} />
            {/* <Route path="/Main" component={MessagesList} /> */}
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(fetchMessages()),
})

export default withRouter(connect(null, mapDispatchToProps)(Main))