const AccidentService = require("../services/accidentService");
const utils = require("../utils");
let options;
module.exports = class Accident {
    static async apiGetAllAccidents(res,req,next){
        try {
            const accidents = await AccidentService.getAllAccidents();
            res.write(JSON.stringify(accidents));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetAccidentsWhere(res,req){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const accidents = await AccidentService.getAccidentsWhere(options);
            res.write(JSON.stringify(accidents));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetWeathers(res,req){
        try{
            const weathers = await AccidentService.getAllWeathers(res,req);
            res.write(JSON.stringify(weathers));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetStates(res,req){
        try{
            const states = await AccidentService.getAllStates(res,req);
            res.write(JSON.stringify(states));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetAccidentsByTemperature(res,req){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        try{
            const accidents = await AccidentService.getAccidentsByTemperature(options);
            res.write(JSON.stringify(accidents));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }


    static async apiGetAccidentById(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
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

    static async apiCreateAccident(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        console.log(options.State, options.Astronomical_Twilight);
        try {
            const createdAccident = await AccidentService.createAccident(options);
            res.write('Success');
        } catch (error) {
            res.statusCode(500);
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
    static async apiGetAccidentsCount(res,req,next){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options.State);
        try{
            const response = await AccidentService.getAccidentsCount(options.State);
            console.log(response);
            res.write(JSON.stringify(response));
        }catch (error){
            res.statusCode = 500;
        }
    }

    static async apiGetAccidentsCountInStatePerYear(res,req,next){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options.State);
        console.log(options.Year);
        try{
            const response = await AccidentService.getAccidentsInStatePerYear(options.State,options.Year);
            console.log(response);
            res.write(JSON.stringify(response));
        }catch (error){
            res.statusCode = 500;
        }
    }

    static async apiDeleteAccident(res, req, next) {
        try {
            const id = utils.parseForId(req);
            const deleteResponse = await AccidentService.deleteAccident(id);
            res.write(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }

}