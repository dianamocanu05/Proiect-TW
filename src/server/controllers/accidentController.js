const AccidentService = require("../services/accidentService");
const AccidentRepository = require("../repositories/accidentRepository");
module.exports = class Accident {
    static async apiGetAllAccidents(){
        try {
            return await AccidentService.getAllAccidents();
        }catch (error){
            console.log(`ERROR : ${error.message}`);
        }
    }


    static async apiGetAccidentById(res, req, next) {
        try {
            let id = '1';
            console.log(id);
            const accidentId = await AccidentService.getAccidentbyId(id);
            res.write(JSON.stringify(accidentId));
        } catch (error) {
            res.statusCode = 500;
        }
    }

    static
    async apiCreateAccident(req, res, next) {
        try {
            const createdAccident = await AccidentService.createAccident(req.body);
            res.json(createdAccident);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

// static async apiUpdateAccident(req, res, next){
//     try {
//         const comment = {}
//         comment.title        = req.body.title;
//         comment.body         = req.body.body;
//         comment.AccidentImage = req.body.Accident_image
//
//         const updatedAccident = await AccidentService.updateAccident(comment);
//
//         if(updatedAccident.modifiedCount === 0){
//             throw new Error("Unable to update accident, error occured");
//         }
//
//         res.json(updatedAccident);
//
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// }

    static
    async apiDeleteAccident(req, res, next) {
        try {
            const AccidentId = req.params.id;
            const deleteResponse = await AccidentService.deleteAccident(AccidentId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}