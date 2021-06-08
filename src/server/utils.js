/**
 * UTIL FUNCTIONS
 * */


module.exports.parseForId = function (req){
    let fields = req.url.toString().split('/');
    return fields[fields.length-1];
};

module.exports.parseTemperatureRange = function (temperatureRange){
    let parts = temperatureRange.split("-");
    let low = parts[0];
    let high = parts[1];
    return [low,high];
}