// 'use strict';

//initialize database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('travelClan', 'postgres', 'password123',{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

// const database = {
//     User: sequelize.import('./User.js'),
//     Trip: sequelize.import('./Trip.js')
// }

// //test database
// sequelize
// .authenticate()
//     .then(()=>console.log("DB connected"))
//     .catch(err => console.log('Error is: '+ err))

// database.sequelize = sequelize;
// database.Sequelize = Sequelize;

// module.exports = database;

