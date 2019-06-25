// connection language from heroku class documents

var Sequelize = require('sequelize'),connection;

if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL);
  } else {
      // how do we work this across many contributors
      // setup for my db to test
    connection = new Sequelize('', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
      port: '3306'
    })
  };