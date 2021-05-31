const Accident = require('../dtos/accident');

module.exports = class Accident{
    static async getAllAccidents(){
        try{
            return await Accident.findAll();
        }catch (error){
            console.log(`ERROR : ${error.message}`);
        }
    }
}