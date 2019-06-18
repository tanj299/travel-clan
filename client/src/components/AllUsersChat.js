import React, { Component } from 'react';
import { connect } from 'react-redux';  // Connects react app to the redux-store
import { fetchAllUsersThunk } from '../thunks'; // Allows data in a function be passed down into a state
import { Link } from 'react-router-dom'; // React Router Linking for URL pages (i.e. localhost:3000/:id) 


class AllUsersChat extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
      // this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/users')
      .then(res => res.json())
      .then(members => self.setState({ members: members }));
  }
  
  logChange(e) {
    this.setState({[e.target.name]: e.target.value});  
  }

  render() {
    return (
      <div className="Users container">
        <h1>Users</h1>
        {/* <table className="table"> */}
        <div> Member Name </div>
        <div> Member Email </div>
        <div> Action </div>
          {/* {this.state.members.map(member =>
            <tr key={member.id}>
            <td>{member.name} {member.surname}</td>
            <td>{member.email}</td>
            <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
            </tr>
          )} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatch(dispatch) {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk())
  }
}

export default connect (mapStateToProps, mapDispatch)(AllUsersChat);