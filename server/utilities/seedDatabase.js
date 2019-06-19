const { Trip, User } = require('../models');

const trips = require('../data/trips');
const users = require('../data/users');

// const db = require('../models');


const populateTripsTable = async (trips) => {
  for(let i = 0; i < trips.length; i++) {
    let currentTrip = trips[i];
    let builtTrip = await Trip.build(currentTrip);
    await builtTrip.save();
  }
}

const populateUsersTable = async (users) => {
  for(let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    let builtUser = await User.build(currentUser);
    await builtUser.save();
  }
}

const seedDatabase = async () => {
  try {
    await populateTripsTable(trips);
    await populateUsersTable(users);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();