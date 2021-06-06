google.charts.load('current', {
    'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([data]);

    var options = { colorAxis: {colors: ['#B5DE7D', '#FFA500', '#FF7A00']},
    width: 1000, height: 500, region: "US",backgroundColor: 'transparent', resolution: "provinces"};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
   // chart.draw(data, {width: 900, height: 500, region: "US", resolution: "provinces"}, options);
    chart.draw(data, options);
}