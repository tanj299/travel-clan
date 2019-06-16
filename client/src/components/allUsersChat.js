import React, { Component } from 'react';

export default class allUsersChat extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        members: []
      }
      this.logChange = this.logChange.bind(this);
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
