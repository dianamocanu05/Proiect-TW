
const sqlite3 = require("sqlite3").verbose();
const path = require('path');

const db = new sqlite3.Database('../data/mock/mock-db.sqlite3');
let states= [];
let number = [];
let count = 0;
   // let db = new sqlite3.Database(db_path);
    db.all("SELECT state, count(*) as number FROM accidents GROUP BY state", function (err,rows){
        if(err) return err;
        rows.forEach(function (row){
            states[count] = row.state;
            number[count] = row.number;
            count = count + 1;
        });
        db.close();
    });
         
 google.charts.load('current', {
  packages: ['corechart'],
  callback: drawChart
});
    
     function drawChart() {

        var data = google.visualization.arrayToDataTable([
        ['State', 'Number of accidents'],
        [states[count-1], number[count-1]]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

