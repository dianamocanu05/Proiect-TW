/**
 * Accident Service -> interacts directly with the database, via the Sequelize operations (findAll, count, create, etc...)
 * */

const AccidentModel = require("../dtos/accident");
const Sequelizer = require('sequelize');
const Op = Sequelizer.Op;
const db = require('../config/database.config');
const Accident = AccidentModel(db, Sequelizer);
let parseTemperatureRange = require('../utils').parseTemperatureRange;

module.exports = class AccidentService {
    /**
     * Getting number of accidents
     * */
    static async getAllAccidents() {
        try {
            return await Accident.count();
        } catch (error) {
            console.log(`Could not fetch accidents ${error}`);
        }
    }

    /**
     * Getting number of accidents in given state
     * */
    static async getAccidentsCount(state){
        try {
            return await Accident.count({
                where: [{'State': state}],
                distinct: 'accident.ID'
            })
                .then(function (count) {
                    console.log(count);
                    return count;
                });
        }catch (error){
            console.log(`Could not fetch accidents count ${error}`)
        }
    }

    /**
     * Getting number of accidents in given state and given year
     * */
    static async getAccidentsInStatePerYear(state, year){
        try{
            return await Accident.count({
                where: {
                    'State': state,
                    'Start_Time': {[Op.like]: year + '%'}
                },
                distinct: 'accident.ID'
            })
                .then(function (count){
                console.log(count);
                return count;
            });
        }catch (error){
            console.log(`Could not fetch accidents count ${error}`)
        }
    }

    /**
     * Creating and inserting new instance of accident
     * */
    static async createAccident(data) {
        try {
            const newAccident ={
                "ID": data.ID,
                "Severity": data.Severity,
                "Start_Time": data.Start_Time,
                "End_Time": data.End_Time,
                "Start_Lat": data.Start_Lat,
                "Start_Lng": data.Start_Lng,
                "End_Lat": data.End_Lat,
                "End_Lng": data.End_Lng,
                "Distance(mi)": data.Distance,
                "Description": data.Description,
                "Number": data.Number,
                "Street": data.Street,
                "Side": data.Side,
                "City": data.City,
                "County": data.County,
                "State": data.State,
                "Zipcode": data.Zipcode,
                "Country": data.Country,
                "Timezone": data.Timezone,
                "Airport_Code": data.Airport_Code,
                "Weather_Timestamp": data.Weather_Timestamp,
                "Temperature(F)": data.Temperature,
                "Wind_Chill(F)": data.Wind_Chill,
                "Humidity(%)": data.Humidity,
                "Pressure(in)": data.Pressure,
                "Visibility(mi)": data.Visibility,
                "Wind_Direction": data.Wind_Direction,
                "Wind_Speed(mph)": data.Wind_Speed,
                "Precipitation(in)": data.Precipitation,
                "Weather_Condition": data.Weather_Condition,
                "Amenity": data.Amenity,
                "Bump": data.Bump,
                "Crossing": data.Crossing,
                "Give_Way": data.Give_Way,
                "Junction": data.Junction,
                "No_Exit": data.No_Exit,
                "Railway": data.Railway,
                "Roundabout": data.Roundabout,
                "Station": data.Station,
                "Stop": data.Stop,
                "Traffic_Calming": data.Traffic_Calming,
                "Traffic_Signal": data.Traffic_Signal,
                "Turning_Loop": data.Turning_Loop,
                "Sunrise_Sunset": data.Sunrise_Sunset,
                "Civil_Twilight": data.Civil_Twilight,
                "Nautical_Twilight": data.Nautical_Twilight,
                "Astronomical_Twilight": data.Astronomical_Twilight
            }
            await Accident.create(newAccident);
            console.log("success!");
            return "success";

        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Getting accidents by id
     * */
    static async getAccidentbyId(id) {
        try {
            return await Accident.findByPk(id);
        } catch (error) {
            console.log(`Accident not found. ${error}`)
        }
    }

    /**
     * Getting accidents where criteria
     * */
    static async getAccidentsWhere(options){
        try{
            return await Accident.findAll({
                where: options,
                limit: 10000
            })
                .then(function (count){
                    console.log(count);
                    return count;

                });
        }catch (error){
            console.log(`Accidents not found. ${error}`)
        }
    }

    /**
     * Getting number of accidents where criteria
     * */
    static async getAccidentsWhereCount(options){
        try{
            return await Accident.count({
                where: options,
            })
                .then(function (count){
                    console.log(count);
                    return count;

                });
        }catch (error){
            console.log(`Accidents not found. ${error}`)
        }
    }

    /**
     * Updating accident
     * */
    static async updateAccident(fields){
        try{
            Accident.update({
                fields
            },
                {
                    where : {
                        "ID" : fields.ID
                    }
                }).then(function (result){
                    console.log("success");
                    return result;
            });
        }catch (error){
            console.log(`Error updating object ${error}`);
        }
    }

    /**
     * Getting accidents in state, where criteria
     * */
    static async getAccidents(state, fields){
        try {
            return await Accident.findAll({
                where: [{'State': state}],
                attributes : fields,
                limit : 100
            })
                .then(function (json) {
                    console.log(json);
                    return json;
                });
        }catch (error){
            console.log(`Could not fetch accidents  ${error}`)
        }
    }

    /**
     * Deleting accident
     * */
    static async deleteAccident(options) {
        options = JSON.parse(options);
        console.log(typeof options);
        try {
            return await Accident.destroy({
                where: options
            });
        } catch (error) {
            console.log(`Could not delete Accident ${error}`);
        }

    }


    /**
     * Getting all types of accidents
     * */
    static async getAllWeathers(){
        try{
            return await Accident.findAll({
                attributes: [
                    [Sequelizer.fn('DISTINCT', Sequelizer.col('Weather_Condition')) ,'weather'],
                ]
            })
                .then(function (list){
                    console.log(list);
                    return list;
            });
        }catch (error){
            console.log(`Could not get weathers ${error}`);
        }
    }

    /**
     * Getting all states
     * */
    static async getAllStates(){
        try{
            return await Accident.findAll({
                attributes: [
                    [Sequelizer.fn('DISTINCT', Sequelizer.col('State')) ,'state'],
                ]
            })
                .then(function (list){
                    console.log(list);
                    return list;
                });
        }catch (error){
            console.log(`Could not get states ${error}`);
        }
    }


    /**
     * Getting number of accidents where criteria, in given temperature range (i.e. [20.0-35.0])
     * */
    static async getAccidentsByTemperature(options){
        let temperatureRange = options.Temperature;
        let temps = parseTemperatureRange(temperatureRange);
        let low = temps[0];
        let high = temps[1];
        delete options.Temperature;
        options = Object.assign(options, {"Temperature(F)" : {[Op.between] : [low, high]}});
        console.log(options);
        try{
            return await Accident.count({
                where: options,
                distinct: 'accident.ID'
            })
                .then(function (count){
                    console.log(count);
                    return count;
                });
        }catch (error){
            console.log(`Accidents not found. ${error}`)
        }

    }


}