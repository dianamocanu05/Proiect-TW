/**
 * Admin controller -> performs API operations
 *
 * */
const AdminService = require("../services/adminService");
const utils = require("../utils");
let credentials;
module.exports = class Admin {
    /**
     * Method tries to authenticate admin
     * on success -> "Logged in successfully"
     * on fail -> "Bad credentials"
     * */
    static async apiLoginAdmin(res, req, next) {
        try {
            const data = await req.on('data',function (data){
                credentials = JSON.parse(data);
                console.log(credentials);
            });

            let admins = await AdminService.findAdminWhere(credentials.username, credentials.password);

            if(admins.toString() !== "") {
                res.write("Logged in successfully!");
            }else{
                res.write("Bad credentials!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }
    }
}