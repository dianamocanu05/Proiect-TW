 google.charts.load("current", {
     packages: ["corechart"]
 });
 google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
     var data = google.visualization.arrayToDataTable([
         ["Weather", "Number of accidents"],
         ["Mostly Cloudy", 8329],
         ["Light Rain", 2300],
         ["Snow", 7858],
         ["Scattered Clouds", 4233],
         ["Clear", 3000]
     ]);

     var options = {
         title: 'Weather condition for most accidents',
         pieHole: 0.4,
         backgroundColor: 'transparent',
         legendTextStyle: {
             color: 'white',
             fontSize: 12,
             fontName: 'Oxygen'
         },
         titleTextStyle: {
             color: 'FFFFFF',
             fontName: 'Oxygen',
             fontSize: '25',
         },
         colors: ['#FF7A00', '#6B6E70', '#70A22A', '#FFB01F', '#383E43'],
     };

     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
     chart.draw(data, options);
 }