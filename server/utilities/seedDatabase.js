const Trip  = require('../models/Trip');
const User = require('../models/User');

const trips = require('../data/trips');

const db = require('../models/index');


const seedDatabase = async () => {
  try {
    await populateTripsTable(trips);
  
    let trip = await Trip.create({tripname: "Summer Vaykay", currentCity: "Limbe", destination: "Cameron", startDate: "05/03/12", 
    endDate: "3/18/2019", itinerary: "Asian lion", shoppingList: "Robust" });

    console.log("Successfully Seeded!");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

const init = async() => {
  try {
    await db.sync({force: true})
    await seedDatabase();
  } catch (error) {
    console.error(error)
  }
}

init()

const populateTripsTable = async (trips) => {
  for(let i = 0; i < students.length; i++) {
    let currentTrip = trips[i];
    await Trip.create(cuurentTrip);
  }
}
