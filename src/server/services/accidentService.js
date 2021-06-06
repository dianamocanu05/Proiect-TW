const AccidentModel = require("../dtos/accident");
const Sequelizer = require('sequelize');
const Op = Sequelizer.Op;
const db = require('../config/database.config');
const Accident = AccidentModel(db, Sequelizer);
let parseTemperatureRange = require('../utils').parseTemperatureRange;

module.exports = class AccidentService {
    static async getAllAccidents() {
        try {
            return await Accident.count();
        } catch (error) {
            console.log(`Could not fetch accidents ${error}`);
        }
    }
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

    static async createAccident(data) {
        try {
            console.log("AICI : " , data.Distance);
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
            console.log('HELLO', newAccident["Distance(mi)"]);
            await Accident.create(newAccident);
            console.log("success!");
            return "success";

        } catch (error) {
            console.log(error);
        }
    }

    static async getAccidentbyId(id) {
        try {
            return await Accident.findByPk(id);
        } catch (error) {
            console.log(`Accident not found. ${error}`)
        }
    }

    static async getAccidentsWhere(options){
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

    /*static async updateAccident(title, body, AccidentImage) {
        try {
            return await Accident.updateOne(
                {title, body, AccidentImage},
                {$set: {date: new Date.now()}});
        } catch (error) {
            console.log(`Could not update Accident ${error}`);

        }
    }*/

    static async deleteAccident(AccidentId) {
        try {
            return await Accident.destroy(AccidentId);
        } catch (error) {
            console.log(`Could not delete Accident ${error}`);
        }

    }

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