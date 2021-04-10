/*
const sqlite3 = require("sqlite3");
resolve = require('path').resolve
*/
//results = []
//for row in cursor:
//    results.append({'state': row[0], 'number': row[1]})
  //  print "state :", row[0]
 //   print "number :", row[1]
    
    
   // const sqlite3 = require('sqlite3').verbose();

// open the database
/*let db = new sqlite3.Database('data/mock/mock-db.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});*/

/*db.serialize(() => {
  db.each(`SELECT state, count(*) as number FROM accidents GROUP BY state`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/
    
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

/*function drawChart() {

  var dataTable = new google.visualization.DataTable({
      cols: [
        { label: 'State', type: 'string' },
        { label: 'Number', type: 'number' }
      ]
  });

  // get html table rows
  var results = document.getElementById('results');
  Array.prototype.forEach.call(results.rows, function(row) {
    // exclude column heading
    if (row.rowIndex > 0) {
      dataTable.addRow([
        { v: (row.cells[0].textContent || row.cells[0].innerHTML).trim() },
        { v: 1 }
      ]);
    }
  });

  var dataSummary = google.visualization.data.group(
    dataTable,
    [0],
    [{'column': 1, 'aggregation': google.visualization.data.sum, 'type': 'number'}]
  );

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(dataSummary, options);
}
*/