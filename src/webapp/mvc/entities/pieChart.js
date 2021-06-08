google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(run);

let statesdata = [];
let filtername;
let colors = [];
const urll = "http://127.0.0.1:3000/api/getWhereCount";
function jsonConcat(json1, json2){
    for (let key in json2) {
        json1[key] = json2[key];
    }
    return json1;
}


function run(states, criteria) {
    console.log("PIE CHART FETCH DATA STARTED");
    // states = ["MI","NY"];
    // colors = randomColors(states.length);
    // criteria = {
    //
    // }
     filtername = Object.keys(criteria).map(function (x){
        return x.toString();
    }).join(", ");
    if(filtername === ""){
        filtername = "overall number of accidents";
    }
    console.log(filtername);
    for (let state of states) {
        getData(state, criteria);
    }
    drawChart(statesdata);
}
function collectData(state, count){
    statesdata.push([state,parseInt(count)]);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
    request.open("POST", urll, false);
    request.send(JSON.stringify(data));
}

function randomColors(howMany){
    let colors = [];
    for(let i = 0 ; i< howMany ; i++){
        let color = getRandomColor();
        colors.push(color);
    }
    return colors;
}

function drawChart(input) {

    let header = ['State','Accidents'];
    let data = [];
    data[0] = header;
    let count = 1;
    for(let i of input){
        data[count] = i;
        count++;
    }
    console.log(data);
    console.log(colors);
    var x = google.visualization.arrayToDataTable(data);
    var options = {
        title: `Comparison by ${filtername}`,
        titleTextStyle: {
            color: '#FFFFFF',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        colors: colors,
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'white', fontSize: 12, fontName: 'Oxygen'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_l'));

    chart.draw(x, options);
}

