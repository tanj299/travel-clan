// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;
export { default as currentTrip } from '../store/utilities/AllTrips';
export { default as currentUser } from '../store/utilities/AllUsers';
export { default as thisTrip } from '../store/utilities/SingleTrip';
export { default as thisUser } from '../store/utilities/SingleUser';
export { default as amadeusCalls } from '../store/utilities/AmadeusCalls';
export { default as pointsOfInterest } from '../store/utilities/AmadeusPointsOfInterest';