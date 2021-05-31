    google.charts.load("current", {
        packages: ['bar']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.arrayToDataTable([
            ["Weather", "Number of accidents"],
            ["Mostly Cloudy", 8329],
            ["Light Rain", 2300],
            ["Snow", 7858],
            ["Scattered Clouds", 4233],
            ["Clear", 3000]
        ]);


        var options = {
            vAxis: {
                title: 'Accidents',
                textStyle: {
                    color: 'white'
                }
            },
            hAxis: {
                title: 'Weather',
                textStyle: {
                    color: 'white'
                }
            },
            chartArea: {
                top: 0,
                right: 0,
                bottom: 0,
                height: '95%',
                width: '90%',
                backgroundColor: {
                    fill: 'transparent',
                },
                fontName: 'Oxygen',
            },
            backgroundColor: {
                fill: 'transparent',
            },
            legendTextStyle: {
                color: 'white',
                fontName: 'Oxygen',
            },
            textStyle: {
                color: 'white',
                fontName: 'Oxygen',
            },
            seriesType: 'bars',
            colors: ['#FF7A00'],
            bar: {
                groupWidth: '48%'
            },

        };
        var chart = new google.charts.Bar(document.getElementById('columnchart_values'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }