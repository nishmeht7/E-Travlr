const {STRING, DATEONLY} = require('sequelize')

module.exports = db => db.define('futureLocations', {
  originCity: {
    type: STRING,
    isNull: false,
  },
  destinationCity: {
    type: STRING,
    isNull: false,
  },
  departureDate: {
    type: DATEONLY,
    isNull: false,
  },
  arrivalDate: {
    type: DATEONLY,
    isNull: false,
  },
})