const sqlite3 = require('sqlite3');
const Schema = sqlite3.Schema;

const accidentSchema = Schema({
    ID: {
        type: String,
        allowNull: true,
        primaryKey: true
    },
    Severity: {
        type: String,
        allowNull: true
    },
    Start_Time: {
        type: String,
        allowNull: true
    },
    End_Time: {
        type: String,
        allowNull: true
    },
    Start_Lat: {
        type: String,
        allowNull: true
    },
    Start_Lng: {
        type: String,
        allowNull: true
    },
    End_Lat: {
        type: String,
        allowNull: true
    },
    End_Lng: {
        type: String,
        allowNull: true
    },
    Distance: {
        type: String,
        allowNull: true
    },
    Description: {
        type: String,
        allowNull: true
    },
    Number: {
        type: String,
        allowNull: true
    },
    Street: {
        type: String,
        allowNull: true
    },
    Side: {
        type: String,
        allowNull: true
    },
    City: {
        type: String,
        allowNull: true
    },
    County: {
        type: String,
        allowNull: true
    },
    State: {
        type: String,
        allowNull: true
    },
    Zipcode: {
        type: String,
        allowNull: true
    },
    Country: {
        type: String,
        allowNull: true
    },
    Timezone: {
        type: String,
        allowNull: true
    },
    Airport_Code: {
        type: String,
        allowNull: true
    },
    Weather_Timestamp: {
        type: String,
        allowNull: true
    },
    Temperature: {
        type: String,
        allowNull: true
    },
    Wind_Chill: {
        type: String,
        allowNull: true
    },
    Humidity: {
        type: String,
        allowNull: true
    },
    Pressure: {
        type: String,
        allowNull: true
    },
    Visibility: {
        type: String,
        allowNull: true
    },
    Wind_Direction: {
        type: String,
        allowNull: true
    },
    Wind_Speed: {
        type: String,
        allowNull: true
    },
    Precipitation: {
        type: String,
        allowNull: true
    },
    Weather_Condition: {
        type: String,
        allowNull: true
    },
    Amenity: {
        type: String,
        allowNull: true
    },
    Bump: {
        type: String,
        allowNull: true
    },
    Crossing: {
        type: String,
        allowNull: true
    },
    Give_Way: {
        type: String,
        allowNull: true
    },
    Junction: {
        type: String,
        allowNull: true
    },
    No_Exit: {
        type: String,
        allowNull: true
    },
    Railway: {
        type: String,
        allowNull: true
    },
    Roundabout: {
        type: String,
        allowNull: true
    },
    Station: {
        type: String,
        allowNull: true
    },
    Stop: {
        type: String,
        allowNull: true
    },
    Traffic_Calming: {
        type: String,
        allowNull: true
    },
    Traffic_Signal: {
        type: String,
        allowNull: true
    },
    Turning_Loop: {
        type: String,
        allowNull: true
    },
    Sunrise_Sunset: {
        type: String,
        allowNull: true
    },
    Civil_Twilight: {
        type: String,
        allowNull: true
    },
    Nautical_Twilight: {
        type: String,
        allowNull: true
    },
    Astronomical_Twilight: {
        type: String,
        allowNull: true
    }
});

module.exports = Accident = sqlite3.model("Accident",accidentSchema);