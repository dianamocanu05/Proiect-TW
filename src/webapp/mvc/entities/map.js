google.charts.load('current', {
    'packages':['geochart'],
});
class Map extends Visualisation{
    constructor(data,title,div_id) {
        super(data,title,div_id);
    }
    create() {
        google.charts.setOnLoadCallback();
        var data = google.visualization.arrayToDataTable([data]);
        var options = { colorAxis: {colors: ['#B5DE7D', '#FFA500', '#FF7A00']},
            width: 1000, height: 500, region: "US",backgroundColor: 'transparent', resolution: "provinces"};

        var chart = new google.visualization.GeoChart(document.getElementById(div_id));
        chart.draw(data, options);
    }
}
