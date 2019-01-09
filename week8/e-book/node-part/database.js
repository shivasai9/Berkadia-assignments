var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'shivasai',
      database : 'ebook'
    }
  });
  module.exports=knex;