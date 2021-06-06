const AdminModel = require("../dtos/admin");
const Sequelizer = require('sequelize');
const db = require('../config/database.config');
const Admin = AdminModel(db, Sequelizer);

module.exports = class AdminService {
    static async findAdminWhere(username, password) {
        try {
            return await Admin.findAll({
                where: {
                    username : username,
                    password : password
                }
            });
        } catch (error) {
            console.log(`Could not find admin ${error}`);
        }
    }
}