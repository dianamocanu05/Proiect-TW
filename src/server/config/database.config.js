const { Sequelize } = require('sequelize');
const db = new Sequelize("database",null,null,{
    dialect : "sqlite",
    storage: "data\\database.db"
});

module.exports = db;