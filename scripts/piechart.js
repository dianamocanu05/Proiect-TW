google.charts.load('current', {
  packages: ['corechart'],
  callback: drawChart
});

     function drawChart() {

        var data = google.visualization.arrayToDataTable([
        ['State', 'Number of accidents'],
        ['OH', 90],
        ['MC', 15],
        ['Fd', 42]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
