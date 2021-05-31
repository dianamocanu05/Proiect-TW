const AccidentService = require("../services/accidentService");

module.exports = class Accident{
    static async apiGetAllAccidents(req, res, next){
        try {
            const Accidents = await AccidentService.getAllAccidents();
            if(!Accidents){
                res.status(404).json("There are no accidents published yet!")
            }
            res.json(Accidents);
        } catch (error) {
            res.status(500).json({error: error})
        }

    }

    static async apiGetAccidentById(req, res, next){
        try {
            let id = req.params.id || {};
            const Accident = await AccidentService.getAccidentbyId(id);
            res.json(Accident);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiCreateAccident(req, res, next){
        try {
            const createdAccident =  await AccidentService.createAccident(req.body);
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

    static async apiDeleteAccident(req, res, next){
        try {
            const AccidentId = req.params.id;
            const deleteResponse =  await AccidentService.deleteAccident(AccidentId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}