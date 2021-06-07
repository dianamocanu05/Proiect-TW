google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(run);
async function run(){
    let states = ["CA"];
    let fields = ["ID","Severity","Side","Start_Time","End_Time","Start_Lat","End_Lat"];
    await fetch_and_draw_table(states,fields);
}
function getRows(accidents){
    let rows = new Array(100);
    let count = 0;
    for(let accident of accidents){
        let keys = Object.keys(accident);
        rows[count] = new Array(keys.length);
        for(let key of keys){
            rows[count].push(accident[key]);
        }
        count++;
    }
    return rows;

}
function parseResponse(accidents){
    let columns = Object.keys(accidents[0]); //any instance will do
    let rows = getRows(accidents);
    return [columns,rows];
}
async function fetch_and_draw_table(states, filters){

    // let input_data = ['State'];
    // Object.keys(filters).forEach(function (key){
    //     input_data.push(key);
    // })
    for(let state of states) {
        let data = {
            "State" : state,
            "Fields" : filters
        }
        console.log(data);
        console.log("fetching data...");
        const _url = 'http://127.0.0.1:3000/api/get';
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.responseText;
                let input  = parseResponse(JSON.parse(response));
                draw_table(input);
            }
        }
        request.open("POST",_url,false);
        request.send(JSON.stringify(data));
    }

}
function draw_table(input) {
    //input contains {columns, rows}
    console.log(input);
    let columns = input[0];
    let rows = input[1];

    let data = new google.visualization.DataTable();
    for(let column of columns){
        console.log(column);
        data.addColumn('string',column);
    }

    //has some null values for some reason
    for(let row of rows){
        data.addRow(row.slice(-columns.length));
    }



   var cssClassNames = {
        'headerRow': 'cssHeaderRow',
        'tableRow': 'cssTableRow',
        'oddTableRow': 'cssOddTableRow',
        'selectedTableRow': 'cssSelectedTableRow',
        'hoverTableRow': 'cssHoverTableRow',
        'headerCell': 'cssHeaderCell',
        'tableCell': 'cssTableCell',
    };

    var options = {
        showRowNumber: false,
        cssClassNames: cssClassNames
    };
    var table = new google.visualization.Table(document.getElementById('table-div'));

    table.draw(data, options);
}