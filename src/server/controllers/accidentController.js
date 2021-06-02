const AccidentService = require("../services/accidentService");
const utils = require("../utils");

module.exports = class Accident {
    static async apiGetAllAccidents(res,req,next){
        try {
            const accidents = AccidentService.getAllAccidents();
            res.write(JSON.stringify(accidents));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetAccidentsWhere(res,req){
        let json = utils.getJson(req);
        console.log(json);
        try {
            const accidents = AccidentService.getAccidentsWhere(json);
            res.write(accidents);
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }



    static async apiGetAccidentById(res, req, next) {
        try {
            let id = utils.parseForId(req);
            console.log(id);
            const accidentId = await AccidentService.getAccidentbyId(id);
            res.write(JSON.stringify(accidentId));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
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
            const id = utils.parseForId(req);
            const deleteResponse = await AccidentService.deleteAccident(id);
            res.send(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }

}