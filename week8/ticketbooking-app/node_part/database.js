const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_ticket', 'root', 'shivasai', {
  operatorsAliases:false,  
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;



