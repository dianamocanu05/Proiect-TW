const { Sequelize } = require('sequelize');
console.log(process.env.DB_PATH);
const db = new Sequelize("database",null,null,{
    dialect : "sqlite",
    storage: "D:\\UNI\\SEM_2\\Proiect-TW\\data\\database.db"
});

module.exports = db;