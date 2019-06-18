import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserThunk } from '../thunks';
import { Link } from 'react-router-dom';

class SingleUser extends Component{
  constructor(props){
  	super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    console.log('User Render', this.props)
    const { thisUser } = this.props

    return (
      <div>
        <h1 className="title"> Users: {thisUser.email}</h1>  

      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    thisUser: state.thisUser
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUserThunk())
  }
}

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleUser);
