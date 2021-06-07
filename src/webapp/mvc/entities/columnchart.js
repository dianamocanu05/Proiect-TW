google.charts.load("current", {
    packages: ['bar']
});
google.charts.setOnLoadCallback(run);
let filterName;
let _url = "http://127.0.0.1/api/getByTemp";
let statesCount = [];
function run(state){
    state =  "CA";

}

//0F = -17 C
//0-20 20-40 40-60 60-80 80-104
//104F = 104C

function collectData(state, count){
    statesCount.push(state,parseInt(count));
}
function getData(state, tempRange){
    let data = {
        "State" : tempRange,
        "Temperature" : tempRange
    };
    console.log(data);
    console.log("fetching data...");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let count = request.responseText;
            collectData(state, count);
        }
    }
    request.open("POST", _url, false);
    request.send(JSON.stringify(data));
}
function drawChart() {
    var data = new google.visualization.arrayToDataTable(input);
    var options = {
        vAxis: {
            title: 'Accidents',
            textStyle: {
                color: 'white'
            }
        },
        hAxis: {
            title: filterName,
            textStyle: {
                color: 'white'
            }
        },
        chartArea: {
            top: 0,
            right: 0,
            bottom: 0,
            height: '95%',
            width: '90%',
            backgroundColor: {
                fill: 'transparent',
            },
            fontName: 'Oxygen',
        },
        backgroundColor: {
            fill: 'transparent',
        },
        legendTextStyle: {
            color: 'white',
            fontName: 'Oxygen',
        },
        textStyle: {
            color: 'white',
            fontName: 'Oxygen',
        },
        seriesType: 'bars',
        colors: ['#FF7A00'],
        bar: {
            groupWidth: '48%'
        },

    };
    var chart = new google.charts.Bar(document.getElementById('column_chart-div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}