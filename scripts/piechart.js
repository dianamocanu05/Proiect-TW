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
           colors: ['#F4A261', '#2A9D8F'],
           backgroundColor: '6DD9CB'
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
           colors: ['#F4A261', '#2A9D8F'],
           backgroundColor: '6DD9CB'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div_r'));

        chart.draw(data, options);
      }
