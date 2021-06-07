
google.charts.load('current', {
    'packages': ['corechart'],
});
google.charts.setOnLoadCallback(fetch_and_draw_barchart);

function fetch_and_draw_barchart(state) {
    console.log('draw barchart was called')

    if (state === undefined){
        state = 'CA'
    }
    console.log('fethcing barchart data')
    const _url = 'http://127.0.0.1:3000/api/getWhere'
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            let bar_chart_accidents = JSON.parse(response)
            console.log(`fetched ${bar_chart_accidents.length} accidents`);
            let input_data = [
                ['Year', 'Number of accidents']
            ]

            let years = {}
            for (let accident of bar_chart_accidents){
                let accidentYear = accident.Start_Time.split('-')[0]
                if(years[accidentYear] === undefined){
                    years[accidentYear] = 0
                }
                years[accidentYear]++
            }
            for (const [key, value] of Object.entries(years)){
                input_data.push([key, value])
            }
            drawBarChart(input_data)
        }
    };
    request.open("POST", _url, false);
    request.send(JSON.stringify({State: state}));
}

function drawBarChart(input_data) {
    var data = google.visualization.arrayToDataTable(input_data);


    var options = {
        title: 'Number of accidents between 2016-2020',
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

    var chart = new google.visualization.LineChart(document.getElementById('barchart-div'));
    chart.draw(data, options);
}


function fetch_and_draw_donut(state) {
    console.log(state, 'donut')
    if (state === undefined){
        state = 'CA'
    }
    console.log('fethcing donut data')
    const _url = 'http://127.0.0.1:3000/api/getWhere'
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            console.log(JSON.parse(response));
            let input_data = [
                ["Weather", "Number of accidents"]
            ]

            let weathers = {}
            for (let accident of JSON.parse(response)){
                let accident_weather = accident.Weather_Condition
                if(weathers[accident_weather] === undefined){
                    weathers[accident_weather] = 0
                }
                weathers[accident_weather]++
            }
            for (const [key, value] of Object.entries(weathers)){
                input_data.push([key, value])
            }
            drawChart(input_data)
        }
    };
    request.open("POST", _url, false);
    request.send(JSON.stringify({State: state}));
}



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