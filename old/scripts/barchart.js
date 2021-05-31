google.charts.load('current', {
    'packages': ['corechart'],
});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Number of accidents'],
        ["july 2016", 123],
        ["august 2016", 205],
        ["july 2017", 124],
        ["august 2017", 450],
        ["july 2018", 345],
    ]);


    var options = {
        title: 'Number of accidents between 2016-2020',
        titleTextStyle: {
            color: '#FFFFFF'
        },
        annotations: {
            textStyle: {
                color: '#FFFFFF'
            },
            fontName: 'Oxygen',
            fontSize: '25',
        },
        hAxis: {
            title: 'Month',
            textStyle: {
                color: '#FFFFFF'
            },
            titleTextStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: 'Number of accidents',
            textStyle: {
                color: '#FFFFFF'
            },
            titleTextStyle: {
                color: 'white',
            }
        },
        series: {
            0: {
                color: '#FF7A00'
            }
        },

        color: '#FF7A00',
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'white', fontSize: 12, fontName: 'Oxygen'},
        width: 1000,
        height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById('barchart-div'));
    chart.draw(data, options);
}
