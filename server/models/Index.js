'use strict';
const Message = require('./message');
const Channel = require('./channel');
const Author = require('./author');
//initialize database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('travelClan', 'postgres', 'maxmax',{
    host: 'localhost',
    dialect: 'postgres'
});

const database = {
    User: sequelize.import('./User.js'),
    Trip: sequelize.import('./Trip.js'),
    Message: sequalize.import('./message.js'),
    Channel: sequalize.import('./channel.js'),
    Author: sequalize.import('./author.js')

}

//test database
sequelize
.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))

database.sequelize = sequelize;
database.Sequelize = Sequelize;

Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooks: true
});

Author.hasMany(Message);
Message.belongsTo(Channel);
Message.belongsTo(Author);

module.exports = {
  database,
  Channel,
  Message,
  Author
};