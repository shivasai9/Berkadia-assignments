var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'shivasai',
      database : 'final-berkadia'
    }
  });
  module.exports=knex;