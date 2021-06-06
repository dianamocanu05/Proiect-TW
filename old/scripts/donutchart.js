 google.charts.load("current", {
     packages: ["corechart"]
 });
 google.charts.setOnLoadCallback(fetch_and_draw_donut);


 async function fetch_and_draw_donut() {
     console.log('fethcing data')
     const _url = 'http://127.0.0.1:3000/api/getWhere'
     let request = new XMLHttpRequest();
     request.onreadystatechange = function () {
         if (request.readyState === 4 && request.status === 200) {
             let response = request.responseText;
             console.log(JSON.parse(response));
             let input_data = [
                 ["Weather", "Number of accidents"]
             ]

             let years = {}
             for (let accident of JSON.parse(response)){
                 let accident_weather = accident.Weather_Condition
                 if(years[accident_weather] === undefined){
                     years[accident_weather] = 0
                 }
                 years[accident_weather]++
             }
             for (const [key, value] of Object.entries(years)){
                 input_data.push([key, value])
             }
             drawChart(input_data)
         }
     };
     request.open("POST", _url, false);
     request.send(JSON.stringify({State: "LA"}));
 }


 // function asfadsf(){
 //     const a = [
 //         ["Weather", "Number of accidents"],
 //         ["Mostly Cloudy", 8329],
 //         ["Light Rain", 2300],
 //         ["Snow", 7858],
 //         ["Scattered Clouds", 4233],
 //         ["Clear", 3000]
 //     ]
 //
 //
 // }

 function drawChart(input_data) {
     var data = google.visualization.arrayToDataTable(input_data);

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