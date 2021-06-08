//diana local path db D:\UNI\SEM_2\Proiect-TW\data\database.db
const { Sequelize } = require('sequelize');
const db = new Sequelize("database",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Ana\\Desktop\\Proiect-TW\\data\\database.db"
});

module.exports = db;