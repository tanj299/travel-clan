'use strict';
module.exports = (sequelize, DataTypes) =>{
    const Trip = sequelize.define('trip', {
        tripname:{
            type: DataTypes.STRING
        },
        currentCity:{
            type: DataTypes.STRING
        },
        destination:{
            type: DataTypes.STRING
        },
        startDate:{
            type: DataTypes.DATE
        },
        endDate:{
            type: DataTypes.DATE
        },
        itinerary:{
            type: DataTypes.STRING
        },
        shoppingList:{
            type: DataTypes.STRING
        }
    })

    return Trip;
}
