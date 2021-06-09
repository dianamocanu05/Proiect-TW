/**
 * Accident Controller -> fires various API operations
 * */
const AccidentService = require("../services/accidentService");
const utils = require("../utils");
let options;
module.exports = class Accident {
    /**
     * Getting all accidents
     * */
    static async apiGetAllAccidents(res,req,next){
        // try {
        //     const accidents = await AccidentService.getAllAccidents();
        //     res.write(JSON.stringify(accidents));
        // }catch (error){
        //     console.log(`ERROR : ${error.message}`);
        //     res.statusCode = 500;
        // }
        const result = AccidentService.getAllAccidents();
        res.write(result);
    }

    /**
     * Getting all accidents where criteria
     * */
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

    /**
     * Getting how many accidents where criteria
     * */
    static async apiGetAccidentsWhereCount(res,req){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const accidents = await AccidentService.getAccidentsWhereCount(options);
            res.write(JSON.stringify(accidents));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    /**
     * Getting all types of weather
     * */
    static async apiGetWeathers(res,req){
        try{
            const weathers = await AccidentService.getAllWeathers(res,req);
            res.write(JSON.stringify(weathers));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    /**
     * Getting all states
     * */
    static async apiGetStates(res,req){
        try{
            const states = await AccidentService.getAllStates(res,req);
            res.write(JSON.stringify(states));
        }catch (error){
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    /**
     * Getting all accidents where criteria, in given temperature range
     * */
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


    /**
     * Getting  accident by given ID
     * */
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

    /**
     * Creating and inserting into db new accident instance
     * */
    static async apiCreateAccident(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        try {
            const createdAccident = await AccidentService.createAccident(options);
            res.write('Success');
        } catch (error) {
            res.statusCode(500);
        }
    }

    /**
     * Updating  accident
     * */
static async apiUpdateAccident(res, req, next){
    const data = await req.on('data',function (data){
        options = JSON.parse(data);
    });

    try {
        const updatedAccident = await AccidentService.updateAccident(options);
        return "success";
    } catch (error) {
        res.statusCode(500);
        return "fail";
    }
}
    /**
     * Getting number of accidents in state
     * */
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

    /**
     * Getting accidents where criteria
     * */
    static async apiGetAccidents(res,req,next){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        let state = options.State;
        let fields = options.Fields;
        try{
            const response = await AccidentService.getAccidents(state, fields);
            console.log(response);
            res.write(JSON.stringify(response));
        }catch (error){
            res.statusCode = 500;
        }
    }

    /**
     * Getting all accidents in given state and given year
     * */
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

    /**
     * Deleting  accident
     * */
    static async apiDeleteAccident(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const deleteResponse = await AccidentService.deleteAccident(options);
            res.write(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }

}