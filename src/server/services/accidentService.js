const Accident = require("../dtos/accident");

module.exports = class AccidentService {
    static async getAllAccidents() {
        try {
            const allAccidents = await Accident.find();
            return allAccidents;
        } catch (error) {
            console.log(`Could not fetch accidents ${error}`);
        }
    }

    static async createAccident(data) {
        try {
            const newAccident = {
                ID: data.ID,
                Severity: data.Severity,
                Start_Time: data.Start_Time,
                End_Time: data.End_Time,
                Start_Lat: data.Start_Lat,
                Start_Lng: data.Start_Lng,
                End_Lat: data.End_Lat,
                End_Lng: data.End_Lng,
                Distance: data.Distance,
                Description: data.Description,
                Number: data.Number,
                Street: data.Street,
                Side: data.Side,
                City: data.City,
                County: data.County,
                State: data.State,
                Zipcode: data.Zipcode,
                Country: data.Country,
                Timezone: data.Timezone,
                Airport_Code: data.Airport_Code,
                Weather_Timestamp: data.Weather_Timestamp,
                Temperature: data.Temperature,
                Wind_Chill: data.Wind_Chill,
                Humidity: data.Humidity,
                Pressure: data.Pressure,
                Visibility: data.Visibility,
                Wind_Direction: data.Wind_Direction,
                Wind_Speed: data.Wind_Speed,
                Precipitation: data.Precipitation,
                Weather_Condition: data.Weather_Condition,
                Amenity: data.Amenity,
                Bump: data.Bump,
                Crossing: data.Crossing,
                Give_Way: data.Give_Way,
                Junction: data.Junction,
                No_Exit: data.No_Exit,
                Railway: data.Railway,
                Roundabout: data.Roundabout,
                Station: data.Station,
                Stop: data.Stop,
                Traffic_Calming: data.Traffic_Calming,
                Traffic_Signal: data.Traffic_Signal,
                Turning_Loop: data.Turning_Loop,
                Sunrise_Sunset: data.Sunrise_Sunset,
                Civil_Twilight: data.Civil_Twilight,
                Nautical_Twilight: data.Nautical_Twilight,
                Astronomical_Twilight: data.Astronomical_Twilight
            }
            return await new Accident(newAccident).save();
        } catch (error) {
            console.log(error);
        }
    }

    static async getAccidentbyId(AccidentId) {
        try {
            return await Accident.findById({_id: AccidentId});
        } catch (error) {
            console.log(`Accident not found. ${error}`)
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
            return await Accident.findOneAndDelete(AccidentId);
        } catch (error) {
            console.log(`Could  ot delete Accident ${error}`);
        }

    }
}