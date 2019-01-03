const Sequelize = require('sequelize');

const sequelize = require('../database');

const seatstable = sequelize.define('seats', {
  theatrename: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  shows: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalseats: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  availableseats: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
  {
    timestamps: false,
  });

module.exports = seatstable;
