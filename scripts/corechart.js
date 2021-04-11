google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Texas', 'California', 'Ohio', 'New York', 'Wyoming', 'Average'],
        ['June', 500, 938, 622, 1098, 450, 714.6],
        ['July', 250, 620, 679, 1268, 288, 682],
        ['September', 357, 1247, 456, 807, 397, 623],
        ['October', 456, 1416, 567, 968, 215, 609.4],
        ['November', 499, 1221, 678, 1026, 366, 569.6],
        ['December', 260, 1167, 567, 1026, 366, 569.6],
    ]);

    var options = {
        title: 'Accidents between June-December 2020',
        titleTextStyle: {
            color: 'FFFFFF',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        vAxis: {
            title: 'Accidents',
            textStyle: {
                color: '#FFFFFF'
            }
        },
        hAxis: {
            title: 'Month',
            textStyle: {
                color: '#FFFFFF'
            }
        },
        backgroundColor: 'transparent',
        legendTextStyle: {
            color: 'white'
        },
        seriesType: 'bars',
        series: {
            5: {
                type: 'line'
            },
            0: {
             
                color: "#FFA500"
            },
            1: {
                color: "#FF7A00"
            },
            2: {
                color: "#474B4F"
            },
            3: {
                color: "#86C232"
            },
            4: {
                color: "#618926"
            },
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}