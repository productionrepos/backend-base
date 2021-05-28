const Sequelize = require('sequelize');
const colors = require('colors');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    {
        host: process.env.DB_HOST,
        dialect: 'mssql',
        requestTimeout: 300000,
        logging: (str) => { console.log(colors.blue.inverse(str)); },
        "dialectOptions": {
            options: { "requestTimeout": 300000 }
          },
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
    });

module.exports = { sequelize }