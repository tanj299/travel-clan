'use strict';
const Sequelize = require('sequelize');
// //initialize database

// const sequelize = new Sequelize('travelClan', 'postgres', 'password123',{
//     host: 'localhost',
//     port: 5433,
//     dialect: 'postgres'
// });

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

//set up relations
const Message = require('./message');
const Channel = require('./channel');
const Author = require('./author');

Channel.hasMany(Message, {
    onDelete: 'cascade',
    hooks: true
  });

  Author.hasMany(Message);
  
  Message.belongsTo(Channel);
  Message.belongsTo(Author);
  

   module.exports = {
    // database,
    Channel,
    Message,
    Author
  };

