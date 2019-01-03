const Sequelize = require('sequelize');

const sequelize = require('../database');

const moviedatatable = sequelize.define('movie-data', {
  theatrename: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  moviename: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pincode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: true
  }
},
  {
    timestamps: false,
  });

module.exports = moviedatatable;
