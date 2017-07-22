const {STRING, ENUM, FLOAT} = require('sequelize')

module.exports = db => db.define('orders', {
  status: {
    type: ENUM,
    values: ['pending', 'complete', 'refunded'],
  },
  amount: {
    type: FLOAT,
    isEmpty: null,
  }
})
