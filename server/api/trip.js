

const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../config/database')
const Trip = require('../models/Trip');

router.get('/allTrips', (req,res) => {
    // res.json({
    //     message: 'trip get method'
    // });
    Trip.findAll()
        .then(trip => {
            console.log(trip);
            res.json(trip);
        })
        .catch(err => console.log(err))

});

router.get('/allTrips/:id', async (req, res, next) => {
    // res.json({
    //     message: 'trip get method'
    // });

    try {
        let trip = await trips.findById(req.params.id);
        if(trip) {
            res.json(trip);
        }
        else {
            res.status(404).send('Trip not found'); 
        }
    }
    catch(error) {
        next(error);
    }
});

router.post('/allTrips', async (req, res, next) =>{
    const trips = await Trip.create({
        tripname: req.body.tripname,
        currentCity: req.body.currentCity,
        destination: req.body.destination,
        startDate: req.body.startDate,
        endDate: req.body.endDate
        // itinerary
        // shoppingList
    })

    res.json({
        trips,
        message: 'got the trip from post'
        });


    
});

router.use('/channels', require('./channels'));
router.use('/messages', require('./messages'));

//return all users
// router.get('/getUsers', (req,res) => {
//     res.json({
//         message: 'user get method'
//     });
// });
//sign-in
// router.get('/signIn', (req,res) => {
//     res.json({
//         message: 'user get method'
//     });
// });


//return all trips from database

// router.get('/trips', (req,res) => {
//     User.findAll(
//     )
//     res.json({
//         message: 'user get method'
//     });
// });

//create new trip
// router.get('/trips/new', (req,res) => {

        // Trip.create({
        //     destination:
        // })
//     res.json({
//         message: 'user get method'
//     });
// });
module.exports = router;