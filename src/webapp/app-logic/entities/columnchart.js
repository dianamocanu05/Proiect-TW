/**
 * Columnchart construction and drawing
 */
google.charts.load("current", {
    packages: ['bar']
});
// google.charts.setOnLoadCallback(run);
let filterName;
let _url = "http://127.0.0.1:3000/api/getByTemp";
let statesCount = [];
let tempMilestones = ["0.0-20.0","21.0-40.0","41.0-60.0","61.0-80.0","80.0-104.0"];
function runColumnchart(){

    for(let milestone of tempMilestones){
        getDataColumn(states[0],filters,milestone);
    }
    drawChartColumn();
}

//0F = -17 C
//0-20 20-40 40-60 60-80 80-104
//104F = 104C
function jsonConcat(json1, json2){
    for (let key in json2) {
        json1[key] = json2[key];
    }
    return json1;
}

function collectDataColumn(tempRange, count){
    statesCount.push([tempRange,parseInt(count)]);
}
function getDataColumn(state,criteria, tempRange){
    let data = {
        "State" : state,
        "Temperature" : tempRange
    };
    data = jsonConcat(data, criteria);
    console.log(data);
    console.log("fetching data...");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let count = request.responseText;
            collectDataColumn(tempRange, count);
        }
    }
    request.open("POST", _url, false);
    request.send(JSON.stringify(data));
}
function drawChartColumn() {
    let input = [];
    let header = ["Weather", "Accidents in context of criteria"];
    input.push(header);
    for(let instance of statesCount){
        input.push(instance);
    }
    console.log(input);
    var data = new google.visualization.arrayToDataTable(input);
    var options = {
        vAxis: {
            title: 'Accidents',
            textStyle: {
                color: 'white'
            }
        },
        hAxis: {
            title: 'Temperature',
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