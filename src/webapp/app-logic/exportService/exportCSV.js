Table = require('../chartsService/controllers/tableController')
table = new Table().getData(filters)
// to add filters O_O

// data1 = {
//     "ID": "X-2906611",
//     "Severity": "",
//     "Start_Time": "",
//     "End_Time": "2019-12-20 10:05:05",
//     "Start_Lat": "40.912209999999995",
//     "Start_Lng": "-73.875099",
//     "End_Lat": "",
//     "End_Lng": "-73.87144",
//     "Distance(mi)": "0.0",
//     "Description": "TEST ADD ACCIDENT",
//     "Number": "439",
//     "Street": "Golden State Fwy S",
//     "Side": "R",
//     "City": "Valencia",
//     "County": "",
//     "State": "CA",
//     "Zipcode": "33527-3948",
//     "Country": "US",
//     "Timezone": "US/Pacific",
//     "Airport_Code": "K3A6",
//     "Weather_Timestamp": "2019-01-30 08:39:00",
//     "Temperature(F)": "55.0",
//     "Wind_Chill(F)": "57.0",
//     "Humidity(%)": "61.0",
//     "Pressure(in)": "29.08",
//     "Visibility(mi)": "10.0",
//     "Wind_Direction": "N",
//     "Wind_Speed(mph)": "7.0",
//     "Precipitation(in)": "2.0",
//     "Weather_Condition": "Rainy",
//     "Amenity": "True",
//     "Bump": "False",
//     "Crossing": "True",
//     "Give_Way": "False",
//     "Junction": "False",
//     "No_Exit": "False",
//     "Railway": "False",
//     "Roundabout": "True",
//     "Station": "False",
//     "Stop": "True",
//     "Traffic_Calming": "False",
//     "Traffic_Signal": "True",
//     "Turning_Loop": "False",
//     "Sunrise_Sunset": "False",
//     "Civil_Twilight": "True",
//     "Nautical_Twilight": "True",
//     "Astronomical_Twilight": "True"
// }
//
//
// data2 = {
//     "ID": "X-2906611",
//     "Severity": "2",
//     "Start_Time": "2019-12-20 08:20:12",
//     "End_Time": "2019-12-20 10:05:05",
//     "Start_Lat": "40.912209999999995",
//     "Start_Lng": "-73.875099",
//     "End_Lat": "40.916901",
//     "End_Lng": "-73.87144",
//     "Distance(mi)": "0.0",
//     "Description": "TEST ADD ACCIDENT",
//     "Number": "439",
//     "Street": "Golden State Fwy S",
//     "Side": "R",
//     "City": "Valencia",
//     "County": "Los Angeles",
//     "State": "CA",
//     "Zipcode": "33527-3948",
//     "Country": "US",
//     "Timezone": "US/Pacific",
//     "Airport_Code": "K3A6",
//     "Weather_Timestamp": "2019-01-30 08:39:00",
//     "Temperature(F)": "55.0",
//     "Wind_Chill(F)": "57.0",
//     "Humidity(%)": "61.0",
//     "Pressure(in)": "29.08",
//     "Visibility(mi)": "10.0",
//     "Wind_Direction": "N",
//     "Wind_Speed(mph)": "7.0",
//     "Precipitation(in)": "2.0",
//     "Weather_Condition": "Rainy",
//     "Amenity": "True",
//     "Bump": "False",
//     "Crossing": "True",
//     "Give_Way": "False",
//     "Junction": "False",
//     "No_Exit": "False",
//     "Railway": "False",
//     "Roundabout": "True",
//     "Station": "False",
//     "Stop": "True",
//     "Traffic_Calming": "False",
//     "Traffic_Signal": "True",
//     "Turning_Loop": "False",
//     "Sunrise_Sunset": "False",
//     "Civil_Twilight": "True",
//     "Nautical_Twilight": "True",
//     "Astronomical_Twilight": "True"
// }

function generateCSVTable(table) {
    let csvTable = ""
    // Generating the table header
    Object.keys(table[0]).forEach(function(key) {
        csvTable+=`${key},`
    });
    // Eliminating the last ,
    csvTable = csvTable.slice(0,-1)
    csvTable += '\n'

    // For each entity(accident) in the table
    table.forEach(function (item) {

        // For each key
        Object.keys(item).forEach(function(key) {
            // Add the item's values
            csvTable+=`${item[key]},`
        })
        // Eliminate useless comma
        csvTable = csvTable.slice(0,-1)
        // Create a new row
        csvTable += '\n'
    });
    return csvTable;

}

function downloadCSV(filename, csvStringContent) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStringContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function exportTableCSV() {
}