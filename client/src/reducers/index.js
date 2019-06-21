// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;
export { default as ChatStore } from '../store/utilities/ChatStore';
export { default as allTrips } from '../store/utilities/AllTrips';
export { default as allUsers } from '../store/utilities/AllUsers';
export { default as singleTrip } from '../store/utilities/SingleTrip';
export { default as singleUser } from '../store/utilities/SingleUser';