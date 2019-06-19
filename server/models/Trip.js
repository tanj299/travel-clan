'use strict';
const Sequelize = require('sequelize');
const database = require('../config/database')

const Trip = database.define('trip', {
    tripname:{
        type: Sequelize.STRING
    },
    currentCity:{
        type: Sequelize.STRING
    },
    destination:{
        type: Sequelize.STRING
    },
    startDate:{
        type: Sequelize.DATE
    },
    endDate:{
        type: Sequelize.DATE
    },
    itinerary:{
        type: Sequelize.STRING
    },
    shoppingList:{
        type: Sequelize.STRING
    }
})

    module.exports = Trip;




///////////////////////////////////////////////
// 'use strict';
// module.exports = (sequelize, DataTypes) =>{
//     const Trip = sequelize.define('trip', {
//         tripname:{
//             type: DataTypes.STRING
//         },
//         currentCity:{
//             type: DataTypes.STRING
//         },
//         destination:{
//             type: DataTypes.STRING
//         },
//         startDate:{
//             type: DataTypes.DATE
//         },
//         endDate:{
//             type: DataTypes.DATE
//         },
//         itinerary:{
//             type: DataTypes.STRING
//         },
//         shoppingList:{
//             type: DataTypes.STRING
//         }
//     })

//     return Trip;
// }
