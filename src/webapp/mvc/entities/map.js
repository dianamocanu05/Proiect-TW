 const mapController = require("../chartsService/controllers/mapController");
// google.charts.load('current', {
//     callback: new Map("","","").create(),
//     packages:['geochart'],
// });
// google.maps.event.addDomListener(window, 'page:load', initialize);
class Map extends Visualisation{
    constructor(data,title,div_id) {
        super(data,title,div_id);
        console.log("CONSTRUCTOR!");
    };

    create = function () {
        console.log("CREATE!");
        //google.charts.setOnLoadCallback();
        //var data = google.visualization.arrayToDataTable([statesCounts]);
        var data = google.visualization.arrayToDataTable([data])

        var options = { colorAxis: {colors: ['#B5DE7D', '#FFA500', '#FF7A00']},
            width: 1000, height: 500, region: "US",backgroundColor: 'transparent', resolution: "provinces"};

        var chart = new google.visualization.GeoChart(document.getElementById("regions_div"));
        chart.draw(data, options);
    };
}
// let map = new Map("","","");
// map.create();
module.exports = Map;
