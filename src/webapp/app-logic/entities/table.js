/**
 * Table construction and drawing
 */
google.charts.load('current', {'packages':['table']});
//google.charts.setOnLoadCallback(runTable);
async function runTable(){
    await fetch_and_draw_table(states,filters);
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
    if(accidents === undefined || accidents === null){
        alert("0 accidents with these criteria found!");
    }
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
        };
        jsonConcat(data, filters);
        console.log(data);
        console.log("fetching data...");
        const _url = 'http://127.0.0.1:3000/api/getWhere';
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
    console.log("DRAW TABLE WAS CALLED");
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
        if(row !== undefined) {
            console.log(row);

            data.addRow(row.slice(-columns.length));
        }
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