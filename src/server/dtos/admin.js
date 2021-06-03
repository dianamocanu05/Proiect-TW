const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');
const db = require('../config/database.config');
const {INTEGER} = require("sequelize");

const adminSchema = {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
    }
}

const AdminModel = db.define('admin',adminSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => AdminModel;