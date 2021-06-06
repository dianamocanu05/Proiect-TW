const { Sequelize } = require('sequelize');
const db = new Sequelize("database",null,null,{
    dialect : "sqlite",
    storage: "D:\\UNI\\SEM_2\\Proiect-TW\\data\\database.db"
});

module.exports = db;