
google.charts.load('current', {
    'packages': ['corechart'],
});
google.charts.setOnLoadCallback(fetch_and_draw_barchart);

async function fetch_and_draw_barchart() {
    console.log('fethcing data')
    const _url = 'http://127.0.0.1:3000/api/getWhere'
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            console.log(JSON.parse(response));
            let input_data = [
                ['Year', 'Number of accidents']
            ]

            let years = {}
            for (let accident of JSON.parse(response)){
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
    request.send(JSON.stringify({State: "LA"}));
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
