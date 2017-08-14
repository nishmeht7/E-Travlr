const {STRING, TEXT, FLOAT, DATEONLY, ENUM} = require('sequelize')

module.exports = db => db.define('prodRequests', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true,
    }
  },
  prodImageURL: {
    type: TEXT,
    validate: {
      isURL: true,
      notEmpty: true,
    }
  },
  url: {
    type: TEXT,
    validate: {
      isURL: true,
      notEmpty: true,
    }
  },
  description: {
    type: TEXT,
    validate: {
      notEmpty: true,
    }
  },
  price: {
    type: STRING,
    validate: {
      notEmpty: true,
    }
  },
  reward: {
    type: FLOAT,
    validate: {
      notEmpty: true,
    }
  },
  prodCity: {
    type: STRING,
    // validate: {
    //   notEmpty: true,
    // }
  },
  userCity: {
    type: STRING,
    // validate: {
    //   notEmpty: true,
    // }
  },
  expiryDate: {
    type: DATEONLY,
  },
  requestStatus: {
    type: ENUM,
    values: ['active', 'pending', 'expired', 'complete'],
  },
})
