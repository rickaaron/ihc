module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.db_host,
    user: process.env.db_user,
    database: process.env.db_name,
    password: process.env.db_pass
  }
});
 
