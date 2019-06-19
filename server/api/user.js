const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../config/database')
const User = require('../models/User');

router.get('/', (req,res) => {
    res.json({
        message: 'user get method'
    });
});

// function checkValidUser(user){
//     const validEmail = typeof user.email == 'string' &&
//                         user.email.trim() != '';
//     const validPassword = typeof user.password == 'string' &&
//                             user.password.trim() != '' &&
//                             user.password.trim().length >= 8;
//     return validEmail && validPassword;
// }

router.post('/signup', async (req, res, next) =>{
    // const data = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'jdoe@fakemail.com',
    //     password: 'password1234'
    // }

    // let {firstName, lastName, email, password} = data;

    //  User.create({
    //     firstName,
    //     lastName,
    //     email,
    //     password
    // })
    // .then(user => res.redirect('/api'))
    // .catch(err => console.log(err));

    // try {
    //     const users = User.create({
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //     });
    //     //res.send(users);
    //     res.json({
    //         message: 'got the user from post'
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     res.sendStatus(404);
    // }

    if(req.body.email && req.body.password){
        User.findOne({
                where:{
                  email: req.body.email,  
                }
        })
        .then(user=>{
            console.log('user', user);

            //if the email is not in use create new user
            //else if the user exists, throw error
            if(!user){
                // if(req.body.password === req.body.confirmedPassword){
                //     res.json({
                //         message: "password matches"
                //     })
                // }else{
                //     next(new Error('password Does not match'));
                // }
                const user = User.create({
                    email: req.body.email,
                    password: req.body.password
                })
                res.json({
                user,
                message: 'got the user from post'
                });
            }else{
                next(new Error('Email in use'));
            }
        })
    }else{
        next(new Error('missing email/password'));
    }

    
});

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