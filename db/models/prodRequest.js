const {STRING, TEXT, FLOAT, DATEONLY, ENUM} = require('sequelize')

module.exports = db => db.define('prodRequests', {
  name: {
    type: STRING,
    notEmpty: true,
  },
  prodImageURL: {
    type: TEXT,
    notEmpty: true,
    isURL: true,
  },
  url: {
    type: TEXT,
    notEmpty: true, 
    isURL: true, 
  },
  price: {
    type: FLOAT,
    notEmpty: true,
  },
  reward: {
    type: FLOAT,
    notEmpty: true,
  },
  prodCity: {
    type: STRING,
    notEmpty: true,
  },
  userCity: {
    type: STRING,
    notEmpty: true,
  },
  expiryDate: {
    type: DATEONLY,
  },
  requestStatus: {
    type: ENUM,
    values: ['active', 'pending', 'expired', 'complete'],
  }
})
