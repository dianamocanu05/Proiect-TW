google.charts.load('current', {
    packages: ['corechart']
});

class Piechart extends Visualisation{
    constructor(data,title,div_id) {
        super(data,title,div_id);
    }

    create() {
        google.charts.setOnLoadCallback(create);
        var data = google.visualization.arrayToDataTable([this.data]);

        var options = {
            title: this.title,
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


}