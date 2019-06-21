'use strict';

// const Message = require('../models/message');
// const Channel = require('../models/channel');
// const Author = require('../models/author');


// const database = {
//     User: sequelize.import('./User.js'),
//     Trip: sequelize.import('./Trip.js'),
//     Message: sequalize.import('./message.js'),
//     Channel: sequalize.import('./channel.js'),
//     Author: sequalize.import('./author.js')

// }
//initialize database
const Sequelize = require('sequelize');
module.exports = new Sequelize('postgres://postgres_user2:password@localhost:5432/travelClan');

require('../models')

// Channel.hasMany(Message, {
//     onDelete: 'cascade',
//     hooks: true
//   });
  
//   Author.hasMany(Message);
//   Message.belongsTo(Channel);
//   Message.belongsTo(Author);


  // module.exports = {
  //   database,
  //   Channel,
  //   Message,
  //   Author
  // };
// const database = {
//     User: sequelize.import('./User.js'),
//     Trip: sequelize.import('./Trip.js')
// }

//test database
// sequelize
// .authenticate()
//     .then(()=>console.log("DB connected"))
//     .catch(err => console.log('Error is: '+ err))

// database.sequelize = sequelize;
// database.Sequelize = Sequelize;

// module.exports = database;