const { Sequelize } = require('sequelize');
const db = new Sequelize("../../../data/us-accidents.db",null,null,{
    dialect : "sqlite"
});

module.exports = db;