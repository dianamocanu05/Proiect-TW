google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(fetch_and_draw_donut);

function fetch_and_draw_donut(state) {
    console.log('fetch_and_draw_donut was called')
    if (state === undefined) {
        state = 'CA'
    }
    console.log('fethcing donut data')
    const _url = 'http://127.0.0.1:3000/api/getWhere'
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            let pie_accidents = JSON.parse(response)
            console.log(`fetched ${pie_accidents.length} accidents for the piechart`);
            let input_data = [
                ["Weather", "Number of accidents"]
            ]

            let weathers = {}
            for (let accident of JSON.parse(response)) {
                let accident_weather = accident.Weather_Condition

                if(accident_weather === 'nan'){
                    continue
                }
                if (weathers[accident_weather] === undefined) {
                    weathers[accident_weather] = 0
                }
                weathers[accident_weather]++
            }
            for (const [key, value] of Object.entries(weathers)) {
                input_data.push([key, value])
            }
            drawChartPiechart(input_data)
        }
    };
    request.open("POST", _url, false);
    request.send(JSON.stringify({State: state}));
}


function drawChartPiechart(input_data) {
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