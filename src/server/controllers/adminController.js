const AdminService = require("../services/adminService");
const utils = require("../utils");
let credentials;
module.exports = class Accident {
    static async apiLoginAdmin(res, req, next) {
        try {
            const data = await req.on('data',function (data){
                credentials = JSON.parse(data);
            });

            let admins = await AdminService.findAdminWhere(credentials.username, credentials.password);

            if(admins.toString() !== "") {
                res.write("Logged in successfully!");
            }else{
                res.write("Bad credentials!");
            }
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }
}