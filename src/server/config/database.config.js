//diana local path db D:\UNI\SEM_2\Proiect-TW\data\database.db
//ana C:\Users\Ana\Desktop\Proiect-TW\data\database.db
const { Sequelize } = require('sequelize');
/**
 * Initializing Sequelize ORM
 * */
const db = new Sequelize("database",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Ana\\Desktop\\Proiect-TW\\data\\database.db"
});

module.exports = db;