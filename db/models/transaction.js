const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('transactions', {
  traveler: {
    type: STRING,
    isNull: false,
  },
  buyer: {
    type: STRING,
    isNull: false,
  },
  transactionNumber: {
    type: INTEGER,
    isNull: false,
  }
})

