google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['State', 'Number of accidents'],
        ['OH', 90],
        ['MN', 233]
    ]);

    var options = {
        title: 'Accidents in OH and MN',
        titleTextStyle: {
            color: 'FFFFFF',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        colors: ['#6B6E70', '#FF7A00'],
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'white', fontSize: 12, fontName: 'Oxygen'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_l'));

    chart.draw(data, options);
}

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['State', 'Number of accidents'],
        ['SD', 266],
        ['AZ', 124]
    ]);

    var options = {
        title: 'Accidents in SD and AZ',
        titleTextStyle: {
            color: 'FFFFFF',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        colors: ['#6B6E70', '#FF7A00'],
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'white', fontSize: 12, fontName: 'Oxygen'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_r'));

    chart.draw(data, options);
}