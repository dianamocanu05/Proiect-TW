google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(run);

let statesCount = [];
const _url = "http://127.0.0.1:3000/api/getWhereCount";
function jsonConcat(json1, json2){
    for (let key in json2) {
        json1[key] = json2[key];
    }
    return json1;
}


function run() {
    console.log("PIE CHART FETCH DATA STARTED");
    let states = ["LA"];
    let criteria = {
        "Severity" : "2",
        "Side" : "R"
    }
    for (let state of states) {
        let accidents_count = getData(state, criteria);
    }
}
function collectData(state, count){
    statesCount.push([state,count]);
}

function getData(state, criteria) {
    let data = jsonConcat({"State" : state},criteria);
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

function drawChart(input) {

    var data = google.visualization.arrayToDataTable(input);

    var options = {
        title: `Comparison by ${filterName}`,
        titleTextStyle: {
            color: 'FFFFFF',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        colors: ['#6B6E70', '#FF7A00'],
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'white', fontSize: 12, fontName: 'Oxygen'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_l'));

    chart.draw(data, options);
}

