'use strict';
var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('user', {
        firstName:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    })

    return User;
}


// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const User = db.define('user', {
//     firstname:{
//         type: Sequelize.STRING,
//         // allowNull: false,
//         unique: fasle
//     },
//     lastname:{
//         type: Sequelize.STRING
//     },
//     email:{
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     password:{
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: false
//     }
// })

// User.associate = (models) => {
//     // User can have many trips that they belong to. 
//     User.hasMany(models.Trip);
//     // A user can be part of many trips
//     User.belongsToMany(models.Trip, {
//       through    : 'member',
//       foreignKey : 'userId'
//     })
//     User.hasOne(models.Space);
//   };
