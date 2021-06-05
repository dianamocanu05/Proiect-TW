google.charts.load('current', {
    packages: ['corechart']
});

class Barchart extends Visualisation{
    constructor(data,title,div_id) {
        super(data,title,div_id);
    }

    create() {
        google.charts.setOnLoadCallback(create);
        var data = google.visualization.arrayToDataTable([data]);


        var options = {
            title: this.title,
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

        var chart = new google.visualization.LineChart(document.getElementById(this.div_id));
        chart.draw(data, options);
    }


}