// import React, { Component } from 'react';
// // import { connect } from 'react-redux';  // Connects react app to the redux-store
// import TripList from './partials/TripList.js';
// import { Link } from 'react-router-dom';
// import { currentTrip } from '../reducers';
// import { fetchAllTripsThunk } from '../thunks'; // Allows data in a function be passed down into a state

// class AllTrips extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       dummyData: [
//         {"name":"Veribet","destination":"Xuguang","dateFrom":"3/13/2019","dateTo":"8/17/2018","users":"Gunter"},
//         {"name":"Flexidy","destination":"Kamenjane","dateFrom":"3/30/2019","dateTo":"3/7/2019","users":"Trudy"},
//         {"name":"Bitchip","destination":"Rochester","dateFrom":"5/7/2019","dateTo":"7/5/2018","users":"Fifi"},
//         {"name":"Toughjoyfax","destination":"Louriceira","dateFrom":"2/1/2019","dateTo":"10/13/2018","users":"Doralynn"}
//       ]
//     }
//   }

//   // componentDidMount () {
//   //   this.props.fetchAllTrips() 
//   // }

//   render() {
//     console.log('All Trips:', this.props)
//     const { currentTrip } = this.state

//     return (
//       <div className = "list">
//         <br></br>
//         <p> This is all my trips </p> 
//         <Link to = "/addTrip">Add Trip</Link> 
//         <TripList tripList = { this.state.dummyData } />

//         {/* Map over All Students Received from the database */}
//         <div>{ currentTrip && currentTrip.map(res => {
//             return (
//               <div className="ListComponent"> 
//                 <div className="Name"> {res.name} </div> 
//               </div>);
//           }) }</div>

//       </div>
//     )
//   }
// }


// // function mapStateToProps(state) {
// //   return {
// //     currentTrip: state.currentTrip
// //   }
// // }

// // function mapDispatch(dispatch) {
// //   return {
// //     fetchAllTrips: () => dispatch(fetchAllTripsThunk())
// //    }
// // }

// export default AllTrips;