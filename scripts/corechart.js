google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Texas', 'California', 'Ohio', 'New York', 'Wyoming', 'Average'],
        ['June',  500,      938,         622,             1098,           450,      714.6],
        ['July',  250,      620,        679,             1268,          288,      682],
        ['September',  357, 1247,        456,             807,           397,      623],
        ['October',  456,      1416,        567,             968,           215,      609.4],
        ['November',  499,      1221,         678,             1026,          366,      569.6],
        ['December',  260,      1167,         567,             1026,          366,      569.6],
    ]);

    var options = {
        title : 'Accidents between June-December 2020',
        vAxis: {title: 'Accidents'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}